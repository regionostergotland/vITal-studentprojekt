import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NewsScoreCalculatorService} from '../../services/news-score-calculator.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmSubmitComponent} from '../shared-components/confirm-submit/confirm-submit.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() mdSubmitChange = new EventEmitter<boolean>();
  patientOverview: boolean;
  history: boolean;
  loading: boolean = false;


  constructor(
      private router: Router,
      public newsScoreCalculator: NewsScoreCalculatorService,
      private dialog: MatDialog
  ) {}


  ngOnInit() {
    this.routeEvent();
  }

  getClinicalRisk() {
    return this.newsScoreCalculator.clinicalRisk;
  }

  getClinicalRiskText() {
    return this.newsScoreCalculator.clinicalRiskText;
  }

  getTotalScore() {
    return this.newsScoreCalculator.totalScore;
  }

  routeEvent() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentLocation = event.url;
        this.patientOverview = currentLocation.substring(0, 5) === '/pid/';
        this.history = currentLocation === '/history';
      }
    });
  }

  openPopup(errorMessage: string) {
    this.loading = true;
    const submit = true;
    this.mdSubmitChange.emit(submit);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      dialogMessage: errorMessage,
    };
    const dialogRef = this.dialog.open(ConfirmSubmitComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(val => {
      this.loading = val;
    })
  }

  isSubmitActive(): boolean {
    let submitActive = false;
    if (!this.newsScoreCalculator.isEmpty && this.newsScoreCalculator.isInputValid()) {
      submitActive = true;
    }
    return submitActive;
  }

}
