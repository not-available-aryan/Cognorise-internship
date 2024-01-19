import { Injectable } from '@angular/core';
import { Project } from '../_modules/Project';
import { Tag } from '../_modules/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] =
  [
    {id: 0,name: 'Sample Angular App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.ANGULAR, Tag.JAVASCRIPT],pictures: ["../../assets/1.jpg","../../assets/2.jpg","../../assets/3.jpg"]},
    {id: 0,name: 'Sample Python App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.PYTHON],pictures: ["../../assets/1.jpg","../../assets/2.jpg","../../assets/3.jpg"]},
    {id: 0,name: 'Sample Javascript App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.JAVASCRIPT],pictures: ["../../assets/1.jpg","../../assets/2.jpg","../../assets/3.jpg"]},
    {id: 0,name: 'Sample TypeScript App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.TYPESCRIPT],pictures: ["../../assets/1.jpg","../../assets/2.jpg","../../assets/3.jpg"]},
    {id: 0,name: 'Sample Node.JS App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.NODEJS],pictures: ["../../assets/1.jpg","../../assets/2.jpg","../../assets/3.jpg"]},
    {id: 0,name: 'Sample Express.JS App',summary: 'Test Description',description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis nihil at ipsa sed similique sit ratione laudantium velit minus magni, doloremque odit pariatur dolores labore quibusdam. Tenetur corporis eligendi, eveniet ducimus labore ad?',projectlink: "//www.github.com",tags: [Tag.ANGULAR, Tag.JAVASCRIPT],pictures: ["../../assets/1.jpg","../../assets/2.jpg","../../assets/3.jpg"]},

];


  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError(`There is no project that matches the id: `+id);
    }
    return project;
  }
}
