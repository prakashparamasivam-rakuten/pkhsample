// File: list-item/TableItem.tsx

import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TableHeader from './TableHeader';
import { HeaderContent, TableRowContent, TableRowType } from '@/types/renderable';
import TableRow from './TableRow';

interface TableItemProps {
  data: Array<TableRowContent>; // Array of objects
}

const TableItem: React.FC<TableItemProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <Text style={styles.noDataText}>No data available</Text>;
    }

    // Extract all unique headers from the entire data array
const headers:HeaderContent[] = Array.from(new Set(data.flatMap(item => Object.keys(item))))
  .map(key => ({
    id: key,
    value: Array.isArray(data[0][key]) ? data[0][key].join(",") : data[0][key] || key
  }))


    // Calculate the maximum width for each column
    const columnWidths = useMemo(() => {
        const widths: Record<string, number> = {};
        headers.forEach((header) => {
            const headerWidth = `${header.value}`.length * 20; // Approximate width of header text
            const maxContentWidth = Math.max(
                ...data.map((row) => {
                    const rowItem:TableRowType= row[header.id];
                    const content = Array.isArray(rowItem) ? rowItem.join(', '): rowItem || '';
                    const truncatedContent = content.toString().substring(0, 50); // Limit to 50 characters
                    return truncatedContent.length * 7; // Approximate width of content text
                })
            );
            widths[header.id] = Math.max(headerWidth, maxContentWidth); // Ensure minimum width is header width
        });
        return widths;
    }, [data, headers]);

    // Apply the calculated widths to all cells
    return (
        <ScrollView horizontal>
            <View style={styles.table}>
                {/* Render table headers */}
                <TableHeader key={"table-container"} headers={headers} columnWidth={columnWidths} />

                {/* Render table rows */}
                {
                    data.map((row, rowIndex) => (
                        <TableRow 
                        key={`row-${rowIndex}-container`}
                            headers={headers} 
                            row={{index:rowIndex,content:row}} 
                            columnWidth = { columnWidths }
                            />
                    ))
                }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: '#ccc',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
    },
    headerCell: {
        fontWeight: 'bold',
        color: 'black',
    },
    noDataText: {
        textAlign: 'center',
        margin: 20,
        fontSize: 16,
    },
});

export default TableItem;
