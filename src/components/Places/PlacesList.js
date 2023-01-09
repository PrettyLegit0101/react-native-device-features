import { FlatList, StyleSheet } from "react-native";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    <View style={styles.fallBackContainer}>
      <Text style={styles.fallbackText}>
        No places added yet - start adding some!
      </Text>
    </View>;
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  fallbackText: {
    fontSize: 16,
  },
});
