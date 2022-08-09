import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import listPokemon from "./../constants/data/pokemon.js"
import Card from "./Card";

const CardList = () => {
    // console.log(listPokemon.pokemon_data);
    return (
        <View style={{flex: 1, }}>
            <FlatList
                data={listPokemon}
                keyExtractor={(item, index) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <Card item={item} />}
                }
                style={styles.flatlistPokemons}
                ListFooterComponent={<View style={{paddingBottom: 100}} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatlistPokemons: {
        flex: 1,
        backgroundColor: '#f5daeb'
    }
})

export default CardList