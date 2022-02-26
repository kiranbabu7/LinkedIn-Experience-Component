import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  jobs = [
    {
      company: 'Krinati Solutions Pvt Ltd',
      logo: `src/app/img/krinati.png`,
      type: 'Full-time',
      startDate: 'March 2022',
      endDate: 'Present',
      title: 'Software Engineer Intern',
      location: 'Mumbai, Mahatrashtra, India',
    },
    {
      company: 'ChatGen',
      logo: `src/app/img/chatgen.jpg`,
      type: 'Part-time',
      startDate: 'Mar 2020',
      endDate: 'Apr 2021',
      title: 'Frontend Developer',
    },
    {
      company: 'Mattermost',
      logo: `src/app/img/mattermost.png`,
      type: 'Full-time',
      startDate: 'Aug 2020',
      endDate: 'Dec 2020',
      title: 'Contributor',
    },
  ];
}
