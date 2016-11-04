import React, { Component } from 'react';
import List from './List.js';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
];

class KanbanBoard extends Component {
    render () {
        return (
            <List id="todo" title="To Do" 
            cards={
                cardsList.filter((card) => card.status === "todo")
            } />
        );
    }
}

export default KanbanBoard