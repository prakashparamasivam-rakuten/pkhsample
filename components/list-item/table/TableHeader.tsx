import { HeaderContent } from '@/types/renderable'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

type TableHeaderProps = {
  headers: HeaderContent[],
  columnWidth: Record<string, number>
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers, columnWidth }) => {
  return (
    <View key={"table-header"}style={styles.headerRow}>
      {headers.map((header,index) => (
        <Text key={`table-col-${header.id}`} style={[styles.cell,styles.headerCell,{ width: columnWidth[header.id] }]}>
          {header.value}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  cell: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center'
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0'
  },
  headerCell: {
    fontWeight: 'bold',
    color: 'black'
  }
})

export default TableHeader
