import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import Latihan from './screens/Latihan';
import ProyekMiniDetail from './screens/ProyekMiniDetail';
import ProyekMiniHome from './screens/ProyekMiniHome';
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Gudang Ind. v1.0' }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={({ route }) => ({ title: route.params?.itemData.nama || 'Detail' })}
                />
                <Stack.Screen
                    name="Tambah"
                    component={TambahScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Styling menggunakan StyleSheet 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
        paddingTop: Platform.OS === 'android' ? 37 : 0,
    },
    header: {
        backgroundColor: '#2c3e50',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 5,
        elevation: 5, // Shadow di Android
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLogo: {
        width: 38,
        height: 38,
        borderRadius: 8,
        marginRight: 12,
    },
    headerTextContainer: {
        flex: 1,
    },
    headerTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    headerSubtitle: {
        color: '#bdc3c7',
        fontSize: 14,
    },
    content: {
        padding: 20,
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 15,
        color: '#333',
    },

    // === Styling Proyek Mini (Mesin) ===
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginTop: 10,
        marginBottom: 15,
    },
    mesinCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row', // Foto di kiri, teks di kanan
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    mesinImage: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 15,
        backgroundColor: '#e0e0e0',
    },
    infoContainer: {
        flex: 1,
    },
    mesinTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    mesinDetail: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 5,
    },
    mesinStatus: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    statusActive: {
        color: '#27ae60',
    },
    statusMaintenance: {
        color: '#f39c12',
    },
    statusInactive: {
        color: '#e74c3c',
    },
    statusStandby: {
        color: '#3498db',
    }
});