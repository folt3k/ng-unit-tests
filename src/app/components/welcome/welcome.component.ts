import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  value = '';

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.value = this.masterService.getMasterValue();
  }
}
