import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Satyam Singh
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Machine Learning Engineer & Computer Vision Researcher
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Passionate researcher specializing in deep learning and computer vision at IIT Mandi. 
            Focused on neural networks, small object detection, and AI applications.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="#experience" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              View Experience
            </Link>
            <Link href="#projects" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-900">Machine Learning Research Intern</h3>
              <p className="text-gray-600 mb-2">Indian Institute of Technology Mandi | May 2025 – Aug 2025</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Researched deep learning–based computer vision methods for small-object detection in high-resolution remote sensing imagery.</li>
                <li>Designed and optimized attention-based architectures and implemented GPU-accelerated models using PyTorch and CUDA for efficient training and inference.</li>
                <li>Applied models to agricultural and environmental monitoring datasets and contributed experimental results toward ongoing research publications.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-900">Machine Learning Project Intern</h3>
              <p className="text-gray-600 mb-2">Indian Institute of Technology Kanpur | May 2024 – Jun 2024</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Collaborated with technology, operations, and capability teams to support the migration of GNA operations to the Genesys platform, ensuring system reliability and data integrity.</li>
                <li>Assisted in validation, testing, and monitoring workflows impacting 1,200+ agents during an 1-month phased rollout, contributing to stable production operations.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Smart Power Demand & Generation Prediction System</h3>
              <p className="text-gray-700 mb-4">
                Multi-region deep-learning system to forecast optimal power generation from environmental, temporal, and demand data.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                <li>Implemented LSTM/GRU and Transformer architectures</li>
                <li>Evaluated with MAE, RMSE, rolling-window validation</li>
                <li>Deployed Dockerized inference behind REST API</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Deep Learning</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">LSTM</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Transformers</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">VARDAx Connect — ML-Powered WAF</h3>
              <p className="text-gray-700 mb-4">
                Production-grade machine-learning–driven Web Application Firewall for real-time threat detection and automated security response.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                <li>Real-time threat detection and anomaly identification</li>
                <li>Advanced ML techniques for traffic pattern analysis</li>
                <li>Automated security response mechanisms</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Machine Learning</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Cybersecurity</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Real-time</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Brain Tumor Classification Using CNNs</h3>
              <p className="text-gray-700 mb-4">
                Transfer learning with pretrained VGG16 and ResNet architectures for medical image analysis, achieving 92% validation accuracy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Deep Learning</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Computer Vision</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Medical AI</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Neural Architecture Search</h3>
              <p className="text-gray-700 mb-4">
                Automated neural architecture optimization using evolutionary algorithms and reinforcement learning techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AutoML</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">NAS</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Optimization</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Programming</h3>
              <p className="text-gray-700">Python, Java, C++, JavaScript</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">ML/AI</h3>
              <p className="text-gray-700">PyTorch, TensorFlow, OpenCV, NumPy, Pandas, Scikit-learn</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Tools</h3>
              <p className="text-gray-700">Git, Docker, Linux, SQL, MongoDB, React, Node.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Satyam Singh</p>
        </div>
      </footer>
    </main>
  );
}
