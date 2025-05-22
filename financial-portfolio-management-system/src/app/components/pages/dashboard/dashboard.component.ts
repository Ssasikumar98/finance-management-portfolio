import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { CommonModule } from '@angular/common';
import { PortfolioItem } from '../../../services/interface';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  assetAllocation = '';
  marketTrends = '';
  performanceMetrics = '';
  portfolios: PortfolioItem[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getPotfolioAndSummaryData();
  }

  getPotfolioAndSummaryData() {
    const summary = this.portfolioService.getSummary();
    this.assetAllocation = summary.assetAllocation;
    this.marketTrends = summary.marketTrends;
    this.performanceMetrics = summary.performanceMetrics;
    this.portfolios = this.portfolioService.getPortfolioData();
  }

}
