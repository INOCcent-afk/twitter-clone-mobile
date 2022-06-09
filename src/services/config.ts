import Config from "react-native-config";

// const prod = {
//   url: {
//     API_URL: "", // services not ready yet
//   },
// };

export const dev = {
  url: {
    API_URL: Config["LOCAL_BASE_API"],
  },
};

export const apiConfig = dev;
