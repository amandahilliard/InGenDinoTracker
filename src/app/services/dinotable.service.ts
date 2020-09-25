import { Injectable } from '@angular/core';
import { Dinos } from '../interfaces/dino-table.interface';


@Injectable({
  providedIn: 'root'
})


export class DinoTableService {
  private dinos: Array<Dinos> = [ 
    {id: 1001, species: 'Tyrannosaurus Rex', weight: 2000, caregiver: 'Dr. Wu', screened: true},
    {id: 1002, species: 'Stegosaurus', weight: 4000, caregiver: 'Dr. Wu', screened: true},
    {id: 1003, species: 'Brachiosaurus', weight: 3000, caregiver: 'Dr. Wu', screened: true},
    {id: 1004, species: 'Triceratops', weight: 4500, caregiver: 'Dr. Wu', screened: true},
    {id: 1005, species: 'Pterodactyl', weight: 1500, caregiver: 'Dr. Wu', screened: true},
  ];
  nextId = 6;
  constructor() { }


  addDino(username: string, title: string): void {
    const newDino: Dinos = {
      id: this.nextId,
      title,
      user: username,
      completed: false
    };
    this.nextId++;
    this.dinos = [...this.dinos, newDino];

  }

  // Delete Todo
  deleteTodo(id: number): void {
    const removeIdx = this.todos.map(todo => todo.id).indexOf(id);
    // remove object
    this.todos.splice(removeIdx, 1);
    // this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // All Todos
  allTodos(): Array<Todo> {
    return [...this.todos];
  }

  // Todos by Username
  byUsername(username: string): Array<Todo> {
    return this.todos.filter(t => username.toLowerCase() === t.user.toLowerCase());
  }

