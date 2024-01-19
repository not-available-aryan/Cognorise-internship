import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_modules/Project';
import { Tag } from '../_modules/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

//   projects: Project[] =
//   [
//     {id: 0,name: 'Sample Angular App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.ANGULAR, Tag.JAVASCRIPT],pictures: []},
//     {id: 0,name: 'Sample Python App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.PYTHON],pictures: []},
//     {id: 0,name: 'Sample Javascript App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.JAVASCRIPT],pictures: []},
//     {id: 0,name: 'Sample TypeScript App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.TYPESCRIPT],pictures: []},
//     {id: 0,name: 'Sample Node.JS App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.NODEJS],pictures: []},
//     {id: 0,name: 'Sample Express.JS App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.ANGULAR, Tag.JAVASCRIPT],pictures: []},

// ];

  projects = [] as Project[];

  constructor(private titleService:Title, private projectService: ProjectsService){
    this.titleService.setTitle('Aryan Yadav - Portfolio');
  }
  ngOnInit(): void {
    this.projects= this.projectService.GetProjects();
  }
}

