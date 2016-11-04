import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard';

class App extends React.Component {
    render () {
        return (
            <KanbanBoard />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));