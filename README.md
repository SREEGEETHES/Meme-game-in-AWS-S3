# Memory Matching Game

A simple memory matching game where users flip two cards to find matching images. If a match is found, the cards disappear; otherwise, they are flipped back.

## Features
- Click two cards to find a match
- Cards flip back if there's no match
- **Ideas for Additional Features:**
  - Scoring system
  - Timer
  - More card sets
  - Multi-player support

## Deployment Environment
The game is hosted as a static website using **Amazon S3**.

## Deployment Pipeline
A continuous deployment pipeline is created using **AWS CodePipeline**:
1. **Source**: GitHub repository containing game code.
2. **Build & Deploy**: CodePipeline detects changes and updates S3 bucket.
3. **Hosting**: S3 serves the static website.

---

## Architecture Diagram
*(Attach an image here)*

---

## Steps to Set Up Deployment
### 1. Create an S3 Bucket
1. Go to the AWS S3 console.
2. Create a new bucket (Enable static website hosting).
3. Upload game files (HTML, CSS, JavaScript).

### 2. Set Up AWS CodePipeline
1. Go to AWS CodePipeline console.
2. Create a new pipeline.
3. Select GitHub as the source.
4. Configure build and deployment to S3.
5. Run the pipeline to deploy the game.

---

## Screenshots
*(Attach screenshots of the setup process here)*

---

## How to Play
1. Click on two cards to reveal their images.
2. If the images match, the cards disappear.
3. If they don't match, they flip back.
4. Continue until all matches are found!

---

## Contributing
Feel free to contribute by adding features or fixing bugs. Fork the repo and submit a pull request!

---

## License
This project is licensed under the MIT License.
