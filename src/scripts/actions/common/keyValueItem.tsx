/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="./interfaces.ts"/>
import * as React from 'react';
import { KeyValueItemStyles as kviStyles } from './Styles'
interface KeyValueItemState {
    itemInputValue: string,
    inEditMode: boolean
}
interface KeyValueItemProps {
    item: IKeyValue
    onUpdateClick: any,
    onDeleteClick: any,
    itemIndex: number,
    showOnlyIconsInButtons:boolean
}

export default class KeyValueItem extends React.Component<KeyValueItemProps, KeyValueItemState> {
    inputId: string;
    constructor(props: any) {
        super(props);
        this.state = {
            itemInputValue: this.props.item.value,
            inEditMode: false
        };
        this.inputId = 'spPropInput_' + this.props.item.key.trim();
    }
    componentDidUpdate() {
        if (this.state.inEditMode) {
            let input = document.getElementById(this.inputId);
            if (input !== null && typeof input !== "undefined")
                input.focus();
        }
    }

    private onDeleteClick(e: any) {
        this.props.onDeleteClick(this.props.item.key);
    }
    private onUpdateClick(e: any) {
        this.props.onUpdateClick(this.props.item.key, this.state.itemInputValue);
    }
    private onValueInputChange(e: any) {
        this.setState({ itemInputValue: e.target.value } as KeyValueItemState);
    }
    private onUpdateBtnClick(e: any) {
        this.setState({ inEditMode: true } as KeyValueItemState);
    }

    public render() {
        let updateBtn: any;
        let valueElement: any;
        let isEditMode:boolean = this.state.inEditMode;

        let inputValue:string = '';
        let inputStyle:any = isEditMode ? kviStyles.saveBtnStyle : kviStyles.updateBtnStyle;
        let deletBtnStyle:any = kviStyles.deleteBtnStyle;
        if(!this.props.showOnlyIconsInButtons){
            inputValue = isEditMode ? 'Save' : 'Edit';
            inputStyle['backgroundPosition'] = '10% 50%';
            deletBtnStyle['backgroundPosition'] = '10% 50%';
        } else {
            inputStyle['backgroundPosition'] = '50% 50%';
            deletBtnStyle['backgroundPosition'] = '50% 50%';
        }

        if (isEditMode) {
            updateBtn = (<input type="button" title="Save" value={inputValue} style={inputStyle} onClick={this.onUpdateClick.bind(this) } />);
            valueElement = (<input style={kviStyles.inputStyles} id={this.inputId} value={this.state.itemInputValue} onChange={this.onValueInputChange.bind(this) } />);
        } else {
            updateBtn = (<input type="button" title="Edit" value={inputValue} style={inputStyle} onClick={this.onUpdateBtnClick.bind(this) } />);
            valueElement = (<input style={kviStyles.inputReadOnlyStyles} id={this.inputId} value={this.state.itemInputValue} onChange={this.onValueInputChange.bind(this) } readOnly />);
        }

        return <tr style={(Math.abs(this.props.itemIndex % 2) !== 1) ? kviStyles.oddTableRowStyles : {}}>
            <th style={kviStyles.headerStyle}>
                {this.props.item.key}:
            </th>
            <td style={kviStyles.tableCellStyle}>
                {valueElement}
            </td>
            <td style={kviStyles.tableCellStyle}>
                {updateBtn}
            </td>
            <td style={kviStyles.tableCellStyle}>
                <input type="button" style={deletBtnStyle} onClick={this.onDeleteClick.bind(this) } title="Delete" value={this.props.showOnlyIconsInButtons ? '' : 'Delete'}/>
            </td>
        </tr>;
    }
}