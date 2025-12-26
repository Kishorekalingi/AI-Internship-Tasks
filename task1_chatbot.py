# TASK 1: Chatbot with Rule-Based Responses
# A simple chatbot using predefined rules and pattern matching

import random

# Define rules and responses
rules = {
    "hello": ["Hi there!", "Hello! How can I help?", "Hey!"],
    "hi": ["Hello!", "Hi! How are you?", "Greetings!"],
    "how are you": ["I'm doing great!", "I'm fine, thanks!", "All good!"],
    "what is your name": ["I'm ChatBot!", "You can call me ChatBot."],
    "bye": ["Goodbye!", "See you later!", "Catch you soon!"],
    "help": ["I'm here to help!", "Sure! What do you need?"],
    "thanks": ["You're welcome!", "Happy to help!", "Anytime!"],
}

def get_response(user_input):
    """Match user input against rules and return response"""
    user_input = user_input.lower().strip()
    
    for keyword, responses in rules.items():
        if keyword in user_input:
            return random.choice(responses)
    
    return "I'm not sure what you mean. Can you rephrase?"

def chatbot():
    """Main chatbot function"""
    print("="*50)
    print("Welcome to ChatBot!")
    print("(Type 'quit' to exit)")
    print("="*50)
    
    while True:
        user_input = input("You: ").strip()
        
        if user_input.lower() in ["quit", "exit", "bye"]:
            print("ChatBot: Goodbye!")
            break
        
        if not user_input:
            continue
        
        response = get_response(user_input)
        print("ChatBot: " + response + "\n")

if __name__ == "__main__":
    chatbot()
