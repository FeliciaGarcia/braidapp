
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'

import MessageRow from './MessageRow'

import translations from '../../../../i18n'

import styles from './Styles'

const ITEM_HEIGHT = 50

class MessageListComponent extends Component {

    constructor() {
        super()

        this.renderItem = ({item}) => {
            return <MessageRow message={item} />
        }

        this.emptyList = () => {
            return (
              <Text
                style={styles.placeholder}>
                  {translations.t('placeholder')}
              </Text>
            )
        }

        this.itemLayout = (data, index) => (
          {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
        )
    }

    componentDidUpdate() {
        if (this.props.data.length) {
            this.flatList.scrollToIndex({animated: true, index: 0});
        }
    }

    render() {
        const data = this.props.data
        const contentContainerStyle = data.length ? null : styles.flatlistContainerStyle
        return (
          <FlatList
            ref={(c) => { this.flatList = c }}
            style={styles.container}
            contentContainerStyle={contentContainerStyle}
            data={data}
            keyExtractor={item => item.time}
            renderItem={this.renderItem}
            getItemLayout={this.itemLayout}
            ListEmptyComponent={this.emptyList}
            inverted />
        )
    }
}

MessageListComponent.propTypes = {
    data: PropTypes.array.isRequired,
}

export default MessageListComponent