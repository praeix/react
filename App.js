import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '// JSX Code',
            output: '',
            err: ''
        }
        this.update = this.update.bind(this);
    }
    update(e){
        try {
            this.setState({
                output: babel.transform(e, {
                    stage: 0,
                    loose: 'all'
                }).code,
                err: ''
            })
        }
        catch(err) {
            this.setState({err: err.message})
        }
    }
    render() {
        let Codemirror = require('react-codemirror');
        require( 'codemirror/mode/javascript/javascript' );
        let options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <Codemirror onChange={this.update} defaultValue={this.state.input} options={options} />
                    <pre>{this.state.output}</pre>
                </div>
            </div>
        )
    }
}

export default App