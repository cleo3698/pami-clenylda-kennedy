import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

type TabelaProps = {
  headers: string[];
  data: string[][];
};

type SortConfig = {
  columnIndex: number;
  direction: 'asc' | 'desc';
};

const Tabela: React.FC<TabelaProps> = ({ headers, data }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  // Ordena os dados conforme a coluna e direção selecionadas
  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortConfig.columnIndex];
      const bVal = b[sortConfig.columnIndex];

      const aNum = parseFloat(aVal);
      const bNum = parseFloat(bVal);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum;
      } else {
        return sortConfig.direction === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
    });

    return sorted;
  }, [data, sortConfig]);

  // Trata clique no cabeçalho para ordenar
  const handleHeaderPress = (index: number) => {
    if (sortConfig && sortConfig.columnIndex === index) {
      setSortConfig({
        columnIndex: index,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortConfig({ columnIndex: index, direction: 'asc' });
    }
  };

  // Trata clique na linha para mostrar alerta
  const handleRowPress = (row: string[]) => {
    Alert.alert('Linha clicada', row.join(' | '));
  };

  return (
    <ScrollView horizontal>
      <View>
        {/* Cabeçalho */}
        <View style={styles.headerRow}>
          {headers.map((header, index) => {
            const isSorted = sortConfig?.columnIndex === index;
            const arrow = isSorted
              ? sortConfig?.direction === 'asc'
                ? ' ↑'
                : ' ↓'
              : '';
            return (
              <TouchableOpacity
                key={index}
                style={styles.cell}
                onPress={() => handleHeaderPress(index)}
                activeOpacity={0.7}
              >
                <Text style={styles.headerText}>{header + arrow}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Dados com rolagem vertical */}
        <ScrollView style={{ maxHeight: 300 }}>
          {sortedData.map((row, rowIndex) => (
            <TouchableOpacity
              key={rowIndex}
              style={[
                styles.dataRow,
                rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow,
              ]}
              onPress={() => handleRowPress(row)}
              activeOpacity={0.6}
            >
              {row.map((cell, cellIndex) => (
                <View key={cellIndex} style={styles.cell}>
                  <Text style={styles.cellText}>{cell}</Text>
                </View>
              ))}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4a90e2',
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderColor: '#357ABD',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
  cell: {
    padding: 12,
    minWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  cellText: {
    color: '#333',
    fontSize: 14,
  },
});

export default Tabela;
