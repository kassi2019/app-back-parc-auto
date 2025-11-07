import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TypeClientModule } from './type-client/type-client.module';
import { TypeEntretiensModule } from './type-entretiens/type-entretiens.module';
import { CarburantsModule } from './carburants/carburants.module';
import { ClientsModule } from './clients/clients.module';
import { EntretiensModule } from './entretiens/entretiens.module';
import { GaragesModule } from './garages/garages.module';
import { IncidentsModule } from './incidents/incidents.module';
import { LocationsModule } from './locations/locations.module';
import { ModePaiementsModule } from './mode-paiements/mode-paiements.module';
import { PaiementsModule } from './paiements/paiements.module';
import { RolesModule } from './roles/roles.module';
import { StationModule } from './station/station.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { VehiculesModule } from './vehicules/vehicules.module';

@Module({
  imports: [AuthModule, PrismaModule, TypeClientModule, TypeEntretiensModule, CarburantsModule, ClientsModule, EntretiensModule, GaragesModule, IncidentsModule, LocationsModule, ModePaiementsModule, PaiementsModule, RolesModule, StationModule, UtilisateursModule, VehiculesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
