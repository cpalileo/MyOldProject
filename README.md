# MyOldProject
A React Boilerplate Template

This project is a React Native boilerplate using Expo, React Navigation, Redux, and Styled Components. It provides a solid foundation for starting new React Native projects quickly.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 20 or newer)
- npm or yarn
- Expo CLI

### Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/cpalileo/MyOldProject.git
    cd MyOldProject
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Start the Project**:

    ```bash
    npm run ios  # For iOS
    npm run android  # For Android
    npm run web  # For Web
    ```

## Project Structure

```
MyOldProject
├── .expo
├── app
├── assets
├── components
│   └── Button.js
├── constants
├── node_modules
├── src
│   ├── navigation
│   │   └── Navigation.js
│   ├── screens
│   │   ├── HomeScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── SettingsScreen.js
│   │   └── DataScreen.js
│   ├── store
│   │   ├── slices
│   │   │   └── exampleSlice.js
│   │   └── store.js
│   ├── utils
│   │   └── api.js
│   └── theme.js
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── expo-env.d.ts
├── navigation.code-workspace
├── package-lock.json or yarn.lock (but not both)
├── package.json
└── tsconfig.json
```

## Features

- **Navigation**: React Navigation with Bottom Tab Navigator.
- **State Management**: Redux Toolkit for state management.
- **Styling**: Styled Components for theming and consistent styling.

## Adding More Features

### 1. Add More Screens

To add more screens, create a new file in the `src/screens` directory and update `Navigation.js` to include the new screen.

Example:

```javascript
// src/screens/NewScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>New Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default NewScreen;
```

Update `Navigation.js`:

```javascript
import NewScreen from '../screens/NewScreen';

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Existing screens */}
        <Tab.Screen name="New" component={NewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

### 2. Add API Calls

Use the `api.js` utility to manage API calls.

Example:

```javascript
// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const getExampleData = async () => {
  try {
    const response = await api.get('/example');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
```

Use the API in a screen:

```javascript
import { useEffect, useState } from 'react';
import { getExampleData } from '../utils/api';

const DataScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getExampleData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // Render data...
};
```

### 3. Theming

Define your theme in `theme.js` and use it in components.

Example:

```javascript
// src/theme.js
export const theme = {
  colors: {
    primary: '#007bff',
    background: '#ffffff',
    text: '#000000',
    accent: '#ff4081',
  },
  fontSizes: {
    small: 12,
    medium: 16,
    large: 20,
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};
```

Use the theme in a styled component:

```javascript
// components/Button.js
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium}px;
  border-radius: 5px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
`;
```

### 4. Async Actions with Redux Thunk

Install and configure Redux Thunk:

```bash
npm install redux-thunk
```

Configure store with Thunk middleware:

```javascript
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  middleware: [thunk],
});
```

Create async actions in a slice:

```javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchExampleData = createAsyncThunk(
  'example/fetchExampleData',
  async () => {
    const response = await getExampleData();
    return response;
  }
);

const exampleSlice = createSlice({
  name: 'example',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExampleData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchExampleData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default exampleSlice.reducer;
```

## Contributing

Feel free to submit issues or pull requests for improvements or new features.

## License

This project is licensed under the MIT License.
```

### Summary

This `README.md` provides detailed instructions for setting up and using your boilerplate project, including optional steps to add more features. You can customize it further based on your needs and any additional features you may want to include. If you have any questions or need further adjustments, feel free to ask!