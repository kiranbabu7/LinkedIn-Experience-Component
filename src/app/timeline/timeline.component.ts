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
      logo: 'https://cdn.discordapp.com/attachments/601660887878729729/947172995363917965/unknown.png',
      type: 'Full-time',
      startDate: 'March 2022',
      endDate: 'Present',
      title: 'Software Engineer Intern',
      location: 'Mumbai, Mahatrashtra, India',
    },
    {
      company: 'ChatGen',
      logo: 'https://cdn.discordapp.com/attachments/601660887878729729/947173204613529620/chatgen.jpg',
      type: 'Part-time',
      startDate: 'Mar 2020',
      endDate: 'Apr 2021',
      title: 'Frontend Developer',
      location: 'Mumbai, Mahatrashtra, India',
    },
    {
      company: 'Mattermost',
      logo: 'https://cdn.discordapp.com/attachments/601660887878729729/947172995632345198/unknown.png',
      type: 'Full-time',
      startDate: 'Aug 2020',
      endDate: 'Dec 2020',
      title: 'Contributor',
      location: 'Mumbai, Mahatrashtra, India',
    },
    {
      company: 'Google',
      logo: 'https://ssl.gstatic.com/images/branding/googleg/2x/googleg_standard_color_64dp.png',
      type: 'Full-time',
      startDate: 'March 2019',
      endDate: 'june 2020',
      title: 'Software Developer',
      location: 'Mumbai, Mahatrashtra, India',
    },
  ];
}
