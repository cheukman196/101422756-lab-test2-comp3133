import { Injectable } from '@angular/core';
import { config } from './config/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() { }

  getSpaceXApi = () => {
    return config.spaceXApiUrl
  }
}
