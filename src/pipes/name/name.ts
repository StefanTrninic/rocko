import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'teamname' })
export class TeamNamePipe implements PipeTransform {
  transform(value: string) {
    switch (value) {
      case '32':
        return 'PES-SERBIA';
      case '33':
        return 'Kazuki ILDM';

      case '35':
        return 'GAMERAH';

      case '36':
        return 'PESPAIN';

      case '37':
        return 'NIUTIN';

      case '38':
        return 'JPAL Union';

      case '68':
        return 'Caelumpes';
      case '69':
        return 'PES-EXPERT';
      case '71':
        return 'LIGAPES';
      case '72':
        return 'PROEVONetwork';
      case '83':
        return 'FC Manualists';

      case '84':
        return 'WAP PHOENIX';
      case '85':
        return 'FANTAPES';
      case '185':
        return 'vPESTIAMO';

      case '186':
        return 'FUMA United';
      case '1695':
        return 'LIBERTY';
      case '2597':
        return 'FC manual All star';
      case '2604':
        return 'PUMA FC';
      case '2644':
        return 'OMG';
      case '1124':
        return 'WE United';

      case '2532':
        return 'HUSARIA TEAM';

      case '2645':
        return 'ATH';
      default:
        return 'transfer list';
    }
  }
}
