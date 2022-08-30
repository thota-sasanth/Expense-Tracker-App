import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import transactionColors from '../constants/transactionColors'
import transactionValues from '../constants/transactionValues'

import { transactions } from '../constants/transactionData'

import Spacer from '../components/transactionSpacer'
import Transaction from '../components/Transaction'


const TransactionHistory = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.horizontalPaddingView}>
            <View style={styles.horizontalPaddingView}>
                <Spacer height={20} />
                <Text style={transactionValues.h2Style}>Transactions History</Text>
                <Spacer height={20} />
                <FlatList
                    
                    data={transactions}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Transaction transaction={item} onPress={(val) => console.warn(`Clicked ${val}`)} />}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default TransactionHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: transactionValues.verticalPadding + 20,
        backgroundColor: transactionColors.background
    },
    horizontalPaddingView: {
        paddingHorizontal: transactionValues.horizontalPadding,
    }
})