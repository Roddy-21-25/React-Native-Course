import { Platform, Text, View } from "react-native"
import RepositoryList from "./RepositoryList"
//? ANTES: import AppBar from './AppBar.jsx'

import { Route, Routes, Navigate } from "react-router-native"

const AppBar = Platform.select({
    //? ./IOSAppBar.jsx y ./AppBar.jsx son los componentes del Bar
    ios: () => require('./IOSAppBar.jsx').default,
    default: () => require('./AppBar.jsx').default
})()

function Main() {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<Text>Sign In</Text>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </View>
    )
}

export default Main