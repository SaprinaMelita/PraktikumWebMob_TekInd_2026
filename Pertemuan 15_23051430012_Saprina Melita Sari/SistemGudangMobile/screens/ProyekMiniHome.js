import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default function ProyekMiniHome({
    navigation,
    items
}) {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Daftar Inspeksi QC
            </Text>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate('Detail', {
                                itemData: item
                            })
                        }
                    >
                        <Text style={styles.nama}>
                            {item.nama}
                        </Text>

                        <Text
                            style={[
                                item.status === 'Gagal' && { color: 'red' },
                                item.status === 'Lolos' && { color: 'green' }
                            ]}
                        >
                            {item.status}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    identitas: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
    },

    card: {
        padding: 15,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 8,
    },

    nama: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});