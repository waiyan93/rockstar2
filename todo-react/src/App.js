import React from 'react';
import Header from './Header';
import Todo from './Todo';
import Done from './Done';
import Add from './Add';
import Divider from '@material-ui/core/Divider';

const App = () => {
    return (
        <div>
            <Header />
            <div style={{ margin: 20 }}>
                <Add />
                <Todo />
                <Divider />
                <Done />
            </div>
        </div>
    );
}

export default App;