import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <StatusBar style="dark" />
            <ProfileCard
                name="MD TOuFIKUL ISLAM"
                studentId="23-53730-3"
                department="Computer Science — AIUB"
                bio="Passionate about mobile development."
                skills={["React Native", "TypeScript", "JavaScript"]}
            />
            <ProfileCard
                name="KAISER"
                studentId="22-67890-2"
                department="Computer Science — AIUB"
                bio="Interested in AI and full-stack web development."
                skills={["Python", "Django", "PostgreSQL"]}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: { backgroundColor: "#F0F4F8", alignItems: "center", paddingTop: 60, paddingBottom: 40 },
});