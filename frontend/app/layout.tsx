import "../styles/globals.css";
import ApolloProviderWrapper from "../components/ApolloProviderWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<ApolloProviderWrapper>{children}</ApolloProviderWrapper>
			</body>
		</html>
	);
}
