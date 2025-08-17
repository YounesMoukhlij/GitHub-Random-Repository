# GitHub Repository Finder 🔍

A modern, responsive web application that allows users to discover popular GitHub repositories by programming language. Built with vanilla JavaScript, HTML, and CSS, featuring a sleek glassmorphism design and real-time data from the GitHub API.

<div align="center">

[📋 View Project Requirements](https://roadmap.sh/projects/github-random-repo) | [✅ Back to Web Roadmap Projects ✅](https://github.com/YounesMoukhlij/web-roadmap-projects)
</div>

## ✨ Features

- **🌐 Language-based Search**: Browse repositories by programming language (Python, JavaScript, C++, C)
- **📊 Repository Details**: View comprehensive information including:
  - Repository name and description
  - Star count and fork count
  - Open issues count
  - Primary programming language
- **🔄 Navigation**: Browse through multiple repositories with the refresh button
- **⚡ Error Handling**: Robust error handling with retry functionality
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Glassmorphism design with smooth animations and transitions

## 🚀 Demo

### Desktop View
<img src="https://via.placeholder.com/400x300/1a1a2e/ffffff?text=Desktop+View" alt="Desktop View" width="400">

### Tablet View
<img src="https://via.placeholder.com/300x400/1a1a2e/ffffff?text=Tablet+View" alt="Tablet View" width="300">

### Mobile View
<img src="https://via.placeholder.com/250x400/1a1a2e/ffffff?text=Mobile+View" alt="Mobile View" width="250">

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with:
  - Glassmorphism effects
  - CSS Grid and Flexbox
  - Responsive design (media queries)
  - CSS custom properties
  - Smooth transitions and animations
- **JavaScript (ES6+)**:
  - Async/await for API calls
  - DOM manipulation
  - Event handling
  - Error handling and retry logic
- **GitHub REST API**: Real-time repository data
- **Google Fonts**: Poppins font family

## 📁 Project Structure

```
GitHub-Random-Repository/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🔧 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YounesMoukhlij/GitHub-Random-Repository.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd GitHub-Random-Repository
   ```

3. **Open in your browser**:
   - Simply open `index.html` in your preferred web browser
   - Or use a local server like Live Server in VS Code

## 💻 Usage

1. **Select a Programming Language**: Choose from the dropdown menu (Python, JavaScript, C++, C)
2. **View Repository**: The app displays the most popular repository for that language
3. **Navigate**: Click the "Refresh" button to browse through different repositories
4. **Retry on Error**: If there's an API error, click "Click to Retry" to fetch data again

## 🌐 API Information

This project uses the [GitHub REST API](https://docs.github.com/en/rest) to fetch repository data:

- **Endpoint**: `https://api.github.com/search/repositories`
- **Parameters**:
  - `q=language:{language}`: Filter by programming language
  - `sort=stars`: Sort by star count
  - `order=desc`: Descending order
  - `per_page=10`: Fetch 10 repositories per request

**Rate Limiting**: GitHub API allows 60 requests per hour for unauthenticated requests.

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: 320px - 479px

## 🎨 Design Features

- **Glassmorphism UI**: Modern glass-like effects with backdrop blur
- **Dark Theme**: Professional dark color scheme
- **Smooth Animations**: Hover effects and transitions
- **Typography**: Clean Poppins font family
- **Loading States**: Visual feedback during API calls
- **Error States**: User-friendly error messages with retry options

## 🔮 Future Enhancements

- [ ] Add search functionality by repository name
- [ ] Implement pagination for browsing more repositories
- [ ] Add more programming languages
- [ ] Include repository creation date and last update
- [ ] Add bookmark/favorite functionality
- [ ] Implement dark/light theme toggle
- [ ] Add repository trend analysis

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Younes Moukhlij**
- GitHub: [@YounesMoukhlij](https://github.com/YounesMoukhlij)

## 🙏 Acknowledgments

- GitHub API for providing repository data
- Google Fonts for the Poppins font family
- Inspiration from modern web design trends

---


⭐ If you found this project helpful, please give it a star on GitHub!
