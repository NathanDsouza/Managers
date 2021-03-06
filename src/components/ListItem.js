import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {
    
    render() {
        const {name} = this.props.employee.item;

        return(
            <CardSection>
                <Text style={styles.titleStye}>
                    {name}
                </Text>
            </CardSection>
        )
    }
}

const styles = {
    titleStye: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;