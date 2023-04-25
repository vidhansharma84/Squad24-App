import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TermAndCondition = () => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>Terms and Conditions</Text>
                <Text style={styles.paragraph}>Please read these terms and conditions carefully before using this app.</Text>
                <Text style={styles.paragraph}>By using this app, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you must not use this app.</Text>
                <Text style={styles.sectionTitle}>Use of App</Text>
                <Text style={styles.paragraph}>This app is provided for your personal use only. You may not use this app for any commercial purpose.</Text>
                <Text style={styles.sectionTitle}>Security</Text>
                <Text style={styles.paragraph}>The app is designed to enhance the security of your device. However, we cannot guarantee that the app will be free from all errors, defects, or vulnerabilities. You are responsible for taking appropriate measures to protect your device from security threats.</Text>
                <Text style={styles.sectionTitle}>User Data</Text>
                <Text style={styles.paragraph}>We may collect and use your personal information as described in our privacy policy. By using this app, you consent to our collection and use of your personal information.</Text>
                <Text style={styles.sectionTitle}>Intellectual Property</Text>
                <Text style={styles.paragraph}>This app and its contents are protected by copyright, trademark, and other laws of the United States and foreign countries. You may not reproduce, modify, distribute, or otherwise use any of the content of this app without our prior written consent.</Text>
                <Text style={styles.sectionTitle}>Disclaimer of Warranties</Text>
                <Text style={styles.paragraph}>THIS APP AND ITS CONTENTS ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</Text>
                <Text style={styles.sectionTitle}>Limitation of Liability</Text>
                <Text style={styles.paragraph}>IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES (INCLUDING BUT NOT LIMITED TO PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) ARISING IN ANY WAY OUT OF THE USE OF THIS APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</Text>
                <Text style={styles.sectionTitle}>Governing Law</Text>
                <Text style={styles.paragraph}>These terms and conditions shall be governed by and construed in accordance with the laws of the United States.</Text>
                <Text style={styles.sectionTitle}>Changes to Terms and Conditions</Text>
                <Text style={styles.paragraph}>We reserve the right to modify these terms and conditions at any time. You should review these terms and conditions periodically for any changes. Your continued use of this app following the posting of any changes to these terms and conditions constitutes your acceptance of those changes.</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = {
    container: {
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 16,
    },
};

export default TermAndCondition;