import { HeaderContent, TableRowContent, TableRowType } from '@/types/renderable'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

type TableRowProps = {
  headers: HeaderContent[],
  row: {
    index: number
    content: TableRowContent
  },
  columnWidth: Record<string, number>
}
const hasMultipleText = (item:TableRowType):boolean => Array.isArray(item)


const TableRow: React.FC<TableRowProps> = ({ headers, row, columnWidth }) => {
  return (
    <View key={`row-${row.index}`} style={styles.row}>
      {headers.map(header => {
        const item:TableRowType = row.content[header.id];
        const data = hasMultipleText(item) ? (item as string[]).join(",") : item

      return (
        <Text key={`row-[${row.index},${header.id}]`} style={[ styles.cell,{ width: columnWidth[header.id] }  ]}>
          {data}
        </Text>
      )
 } )}
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
  },
  row: {
    flexDirection: 'row'
  }
})

export default TableRow
