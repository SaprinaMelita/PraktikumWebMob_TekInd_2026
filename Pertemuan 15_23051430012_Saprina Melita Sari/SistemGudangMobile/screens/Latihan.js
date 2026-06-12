import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

export default function TambahScreen({ navigation }) {
    const [nama, setNama] = useState('');
    const [stok, setStok] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tambah Barang</Text>

            <TextInput
                placeholder="Nama Barang"
                value={nama}
                onChangeText={setNama}
                style={styles.input}
            />

            <TextInput
                placeholder="Jumlah Stok"
                value={stok}
                onChangeText={setStok}
                keyboardType="numeric"
                style={styles.input}
            />

            <Button
                title="Simpan"
                onPress={() => {
                    alert(`Barang ${nama} berhasil ditambahkan`);
                    navigation.goBack();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 8,
    },
});