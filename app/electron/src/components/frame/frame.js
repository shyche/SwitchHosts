/**
 * @author oldj
 * @blog http://oldj.net
 */

'use strict';

import React from 'react';
import './frame.less';

export default class Frame extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillReceiveProps(next_props) {
        if (next_props.show) {
            setTimeout(() => {
                let el = this.refs.frame;
                el && el.querySelector('input').focus();
            }, 100);
        }
    }

    onOK() {
        this.props.onOK();
    }

    onCancel() {
        this.props.onCancel();
    }

    renderFootButtons() {
        let html = [];

        html.push(
            <div
                className="button btn-cancel"
                key="btn-cancel"
                onClick={this.onCancel.bind(this)}
            >
                {SH_Agent.lang.cancel}
            </div>
        );

        html.push(
            <div
                className="button btn-ok btn-default"
                key="btn-ok"
                onClick={this.onOK.bind(this)}
            >
                {SH_Agent.lang.ok}
            </div>
        );

        return html;
    }


    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="frame" ref="frame">
                <div className="overlay"></div>
                <div className="prompt">
                    <div className="head">{this.props.head}</div>
                    <div className="body">{this.props.body}</div>
                    <div className="foot">{this.renderFootButtons()}</div>
                </div>
            </div>
        );
    }
}
