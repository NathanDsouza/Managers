import React,{Component} from 'react';
import {FlatList} from 'react-native';
import {employeeFetch} from '../actions/EmployeeActions';
import {connect} from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeeFetch();
    }

    renderRow(employee){
        return <ListItem employee = {employee} />;
    }
    render(){
        console.log(this.props);
        return(
            <FlatList
                data={this.props.employee}
                renderItem={this.renderRow}
                keyExtractor={employee => employee.uid}
                />
             
        );
    }
}

const mapStateToProps = state => {
    const employee = _.map(state.employee, (val, uid) =>{
        return {...val, uid};
    });
    return {employee};
};

export default connect(mapStateToProps, {employeeFetch})(EmployeeList);