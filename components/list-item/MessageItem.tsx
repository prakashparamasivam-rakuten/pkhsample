import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


// Reusable Typography Styles
const typography = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 14,
    color: '#555'
  }
})

// Reusable Spacing Styles
const spacing = StyleSheet.create({
  marginSmall: {
    margin: 8
  },
  marginMedium: {
    margin: 16
  },
  paddingSmall: {
    padding: 8
  },
  paddingMedium: {
    padding: 16
  }
})

// Image Component
function MessageImage ({ uri }: { uri: string }) {
  console.log(`MessageImage : URI = ${uri}`)
  return (
    <View>
      <Image  source={{uri}} style={styles.image} />
    </View>
  )
}

// Message Item Component
function MessageItem ({
  name,
  message,
  imageUri
}: {
  name: string
  message: string
  imageUri: string
}) {
  return (
    <View style={[styles.container, spacing.marginSmall]}>
      <MessageImage uri={imageUri} />
      <View style={styles.textContainer}>
        <Text style={[typography.header, spacing.marginSmall]}>{name}</Text>
        <Text style={[typography.body, spacing.marginSmall]}>{message}</Text>
      </View>
    </View>
  )
}

// Styles for Message Item
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3
  },
  textContainer: {
    flex: 1,
    padding: 8
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  }
})

export default MessageItem
