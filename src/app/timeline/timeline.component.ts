import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  jobdata: any = [];
  constructor(public jobs: JobService) {
    this.jobs.getJobs().subscribe((jobs) => {
      this.jobdata = jobs;
    });
  }

  ngOnInit(): void {}
}
