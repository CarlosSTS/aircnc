import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SpotList from "../../components/SposList";

import logo from "../../assets/logo.png";
import styles from "./styles";

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then((storagedTechs) => {
      const techsArray = storagedTechs.split(",").map((tech) => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <ScrollView>
        {techs.map((techs) => (
          <SpotList key={techs} techs={techs} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
