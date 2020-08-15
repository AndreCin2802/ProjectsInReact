import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'

const inicialState = {
    displayValue: '0',
    clearDisplay: false,
    current: 0,
    values: [0, 0]
}

export default class Calculator extends Component {
    state = { ...inicialState }


    clearMemory() {
        this.setState({ ...inicialState })
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })



        if (n !== '.') {
            const newValue = parseFloat(displayValue)
            const i = this.state.current
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })



        }


    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        }

        else {
            const equals = operation === '='
            const values = [...this.state.values]


            switch (this.state.operation) {
                case '+':
                    values[0] = values[0] + values[1]
                    break

                case '-':
                    values[0] = values[0] - values[1]
                    break

                case '*':
                    values[0] = values[0] * values[1]
                    break
                
                case '/':
                    values[0] = values[0] / values[1]
                    break

            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                clearDisplay: !equals,
                current: equals ? 0 : 1,
                operation: equals ? null : operation,
                values
            })
        }
    }




    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = n => this.setOperation(n)
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} ></Display>

                <Button label="AC" triple click={() => this.clearMemory()}></Button>
                <Button label="/" operation click={setOperation}></Button>
                <Button label="7" click={addDigit}></Button>
                <Button label="8" click={addDigit}></Button>
                <Button label="9" click={addDigit}></Button>
                <Button label="*" operation click={setOperation}></Button>
                <Button label="4" click={addDigit}></Button>
                <Button label="5" click={addDigit}></Button>
                <Button label="6" click={addDigit}></Button>
                <Button label="-" operation click={setOperation}></Button>
                <Button label="1" click={addDigit}></Button>
                <Button label="2" click={addDigit}></Button>
                <Button label="3" click={addDigit}></Button>
                <Button label="+" operation click={setOperation}></Button>
                <Button label="0" double click={addDigit}></Button>
                <Button label="." click={addDigit}></Button>
                <Button label="=" operation click={setOperation}></Button>


            </div>
        )

    }
}
