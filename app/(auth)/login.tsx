import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function login() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const handleGoogleSignin = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });

      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.log("OAuth error", error);
    }
  };
  return (
    <View style={styles.container}>
      {/* Brand Section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Adilight</Text>
        <Text style={styles.tagline}>Lets puipui everything</Text>
      </View>
      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          style={styles.illustration}
          resizeMode="cover"
          source={require("../../assets/images/auth_bg.png")}
        />
      </View>

      {/* Login Section */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          onPress={handleGoogleSignin}
          activeOpacity={0.9}
          style={styles.googleButton}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue With Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By continuing you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
