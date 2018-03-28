import React from 'react';
import './App.css';
import './App.less';
import { Button } from 'antd';

//
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="title titleLess">
				App
                <div>
                    <Button type="primary">default</Button>
                </div>
            </div>
        );
    }
}