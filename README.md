### Flashcards
This app is the 3rd homework of the Udacity nanodegree course. As of now it is
build for iOS. 
Taken from the project details of the assignement instructions:
For the UdaciCards project, you will build a mobile application (Android or iOS
- or both) that allows users to study collections of flashcards. The app will
allow users to create different categories of flashcards called "decks", add
flashcards to those decks, then take quizzes on those decks

### Setup
Simply clone the repo and cd into it. Run "npm install" to install it and then use whatever iOS emulator you have or expo "expo start" to use the app.

### Requirements 
Taken from the project details of the assignement instructions:
- Use create-react-native-app to build your project.
- Allow users to create a deck which can hold an unlimited number of cards.
- Allow users to add a card to a specific deck.
- The front of the card should display the question.
- The back of the card should display the answer.
- Users should be able to quiz themselves on a specific deck and receive a score
	once they're done.
- Users should receive a notification to remind themselves to study if they haven't already for 	that day.

### Dependencies
initial created via create-react-native-app
redux
react-redux
redux-thunk
react-navigation

### Design
# Views
	DeckList
		# displays the title of each Deck
		# displays the number of cards in each deck
		- Dashboard (map over decks)

	IndividualDeck
		# displays the title of the Deck
		# displays the number of cards in the deck
		# displays an option to start a quiz on this specific deck
		# An option to add a new question to the deck
		- Deck

	Deck
		# displays a card question
		# an option to view the answer (flips the card)
		# a "Correct" button
		# an "Incorrect" button
		# the number of cards left in the quiz
		# Displays the percentage correct once the quiz is complete
		- Deck
			- NewDeck
			- Card

	NewDeck
		# An option to enter in the title for the new deck
		# An option to submit the new deck title
			nested in Deck

	NewQuestion
		# An option to enter in the question
		# An option to enter in the answer
		# An option to submit the new question
			- NewQuestion

# Data
	# Overall changes will be dispatched to the redux-store and the redux-store submited to localStorage. 
	store
		- AsyncStorage
		- Redux
		- helper methodes
			- getDecks
			- getDeck
			- saveDeckTitle
			- addCardToDeck
		- state
			- decks
				- card
					- question
					- answer
		- actions
			- receiveDecks
			- addDeck
			- addCardToDeck
		- shared actions
			- handleReceiveDecks (gets decks from async storage)
			- handleAddDeck (adds deck to redux-store and creates new async storage enrty)
			- handleAddCardToDeck (puses a new card to deck_i and updates the deck by replacing the old one in the redux-store as well as the asny-store by key)
		- data
			- decks: list of deck-objs
			- deck: single deck-obj (deckName, cards)
			- card: card-obj (question, answer)
	dataBase 
		# localStorage
		# each deck represent an entry and decks get updated individually
# Navigation
	Navigation via stacknaivigator. 
		- Home: Decks (entry point), navigates to:
			- Add new Deck
			- individual-deck 
				- Quiz
				- New Card

# Components
	AddCard
		2x input fields and a submit button renders when both input field contents > 0. Submit btn dispatches shared action handleAddCardToDeck.
	AddDeck
		1x input fields and a submit button renders when input field content > 0. Submit btn dispatches shared action handleAddDeck.
	AppStatusBar
		UdacityStatusBar from Udacity tutorial adopted for falshcards app.
	Deck
		Shows deck title and 2x buttons that link to "AddCard" or "Quiz" of the specific deck (deckName gets passed via navigate).
		If there are no questuions yet there will be no option to start the quiz but a text "No Questions yet...".
	Decks
		A simple dashboard-list of available decks (DeckThumbs)
	DeckThumb
		Quick deck desciption
	Home
		App entry that renders AppStatusBar, Decks and button to navigate to AddDeck.
	Quiz
		Quiz scrren. Shows first question and an option to show Answer. Answer shows option to select if questions was answered wrong or rigth. After answering the last question an option shows to restart the quiz.
	

### Sources and influences
	- https://www.Udacity.com (react-nanodegree)
	- https://www.tutorialspoint.com/react_native
	- https://www.tylermcginnis.com/
	- https://facebook.github.io/react-native/
	- https://www.traversymedia.com/
	- https://stackoverflow.com/