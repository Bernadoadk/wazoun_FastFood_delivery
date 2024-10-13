import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import * as Icon from 'react-native-feather'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '../components/categories'
import FeaturedRow from '../components/featuredRow'
import { featured } from '../costants'
import { themeColors } from '../theme'

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            {/* Search bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" widht="25" stroke="gray" />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1"/>
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" widht="20" stroke="gray" />
                        <Text className="text-gray-600">Cadjehoun,Ctn</Text>
                    </View>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                    <Icon.Sliders height="20" widht="20" strokeWidth={2.5} stroke="white" />
                </View>
            </View>

            {/* main */}

            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 20
            }}
            >
                { /*categories*/ }
                <Categories />

                { /*features*/ }
                <View className="mt-5">
                    {
                        [featured, featured, featured].map((item, index)=>{
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}