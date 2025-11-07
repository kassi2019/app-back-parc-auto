// auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus, Get, Param, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }


  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  //@UseGuards(JwtAuthGuard)  // ⬅️ définit le code 201
  async register(@Body() dto: { telephone: string; password: string; nom: string; prenoms: string, role_id: number, photoUrl: string },
    @Req() req: any) {
    //const userId = req.user.sub;

    const user = await this.authService.register(dto);

    // On renvoie un objet clair ; le status 201 est déjà fixé par @HttpCode
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Compte créé avec succès',
      data: {
        id: user.id,
        telephone: user.telephone,
        nom: user.nom,
        prenoms: user.prenoms,
        role: user.role_id,

        //user_id: userId

      },
    };
  }
  @Post('login')
  login(@Body() dto: { telephone: string; password: string }) {
    return this.authService.login(dto.telephone, dto.password);
  }

  @UseGuards(JwtAuthGuard) // ✅ Assure que seul un utilisateur connecté peut se déconnecter
  @Post('logout')
  async logout(@Req() req: Request) {
    const token = req.headers['authorization']?.split(' ')[1]; // ✅ Récupérer le token JWT

    if (!token) {
      throw new UnauthorizedException('Token manquant');
    }

    return this.authService.logout(token); // ✅ Appel du service
  }


  @Get('sessions/:userId')
  @UseGuards(JwtAuthGuard)
  async getSessions(@Param('userId') userId: string) {
    const sessions = await this.authService.getUserSessions(Number(userId));
    const now = new Date();

    return {
      userId: Number(userId),
      userName: sessions[0]?.users ? `${sessions[0].users.nom}` : null,
      totalSessions: sessions.length,
      sessions: sessions.map(session => ({
        id: session.id,
        token: session.token,
        created_at: session.created_at,
        expires_at: session.expires_at,
        status: session.expires_at && session.expires_at > now ? 'Active' : 'Expirée', // ✅ Ajout du statut
      })),
    };
  }

}
