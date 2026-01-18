import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiDocker,
  SiGit,
  SiLatex,
  SiOpencv,
  SiHuggingface
} from "react-icons/si";
import YoloIcon from "@/components/YoloIcon";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      {/* About Section */}
      <section id="about" className="section border-b border-[var(--color-border)] pb-8 mb-8 pt-20 md:pt-0">
        <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wide text-[var(--color-text-muted)] text-sm">
          About Me
        </h2>
        <div className="space-y-4 text-[var(--color-text)] leading-relaxed">
          <p>
            I am a <strong>Machine Learning Engineer</strong> and researcher specializing in <strong>deep learning</strong> and <strong>computer vision</strong>.
            Currently, I am working on cutting-edge neural network architectures for small object detection in remote sensing imagery at <strong>IIT Mandi</strong>.
          </p>
          <p>
            My work bridges the gap between theoretical research and practical application. I have experience building production-grade ML systems, from
            optimizing transformer models to deploying real-time threat detection pipelines. I am passionate about solving complex problems using
            data-driven statistical inference and advanced pattern recognition.
          </p>
        </div>
      </section>

      {/* Toolkit / Tech Stack (Visual) */}
      <section id="toolkit" className="section border-b border-[var(--color-border)] pb-8 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-muted)] mb-6">
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 text-center">
          <div className="flex flex-col items-center gap-2 group">
            <SiPython className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#3776AB] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">Python</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiPytorch className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#EE4C2C] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">PyTorch</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiTensorflow className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#FF6F00] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">TensorFlow</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiKeras className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#D00000] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">Keras</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiOpencv className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#5C3EE8] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">OpenCV</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiScikitlearn className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#F7931E] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">Scikit-learn</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiHuggingface className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#FFD21E] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">Hugging Face</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <YoloIcon className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#0052FF] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">YOLO</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiDocker className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#2496ED] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">Docker</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiGit className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#F05032] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">Git</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiLatex className="w-8 h-8 text-[var(--color-text-muted)] group-hover:text-[#008080] transition-colors" />
            <span className="text-xs text-[var(--color-text-muted)]">LaTeX</span>
          </div>
        </div>
      </section>

      {/* Recent Updates - Placeholder like Saswat's */}
      <section id="updates" className="section border-b border-[var(--color-border)] pb-8 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-muted)] mb-4">
          Recent Updates
        </h2>
        <ul className="space-y-3">
          <li className="flex gap-4 text-sm">
            <span className="font-mono text-[var(--color-text-muted)] flex-shrink-0">Jan 2026</span>
            <span>Launched new portfolio design based on academic minimalist aesthetics.</span>
          </li>
          <li className="flex gap-4 text-sm">
            <span className="font-mono text-[var(--color-text-muted)] flex-shrink-0">Aug 2025</span>
            <span>Completed research internship at <strong>IIT Mandi</strong> focusing on satellite imagery analysis.</span>
          </li>
          <li className="flex gap-4 text-sm">
            <span className="font-mono text-[var(--color-text-muted)] flex-shrink-0">May 2025</span>
            <span>Started research regarding small object detection using Attention Mechanisms.</span>
          </li>
        </ul>
      </section>

      {/* Research / Publications */}
      <section id="research" className="section border-b border-[var(--color-border)] pb-8 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-muted)] mb-6">
          Selected Publications
        </h2>
        <div className="space-y-6">
          <article>
            <h3 className="text-lg font-bold">
              <a href="#" className="hover:underline text-[var(--color-primary)]">
                Small Object Detection in Remote Sensing: A Review
              </a>
            </h3>
            <p className="text-sm mt-1">
              <strong>Satyam Singh</strong>, Collaborator A, Collaborator B
            </p>
            <p className="text-sm italic text-[var(--color-text-muted)]">
              IEEE Transactions on Geoscience and Remote Sensing (Under Review), 2025
            </p>
            <div className="mt-2">
              <span className="text-xs border border-[var(--color-border)] px-2 py-0.5 rounded text-[var(--color-text-muted)]">Preprint</span>
            </div>
          </article>

          <article>
            <h3 className="text-lg font-bold">
              <a href="#" className="hover:underline text-[var(--color-primary)]">
                Attention Mechanisms for Hyperspectral Image Analysis
              </a>
            </h3>
            <p className="text-sm mt-1">
              <strong>Satyam Singh</strong>, Supervisor Name
            </p>
            <p className="text-sm italic text-[var(--color-text-muted)]">
              CVPR Workshop on Earth Vision, 2024
            </p>
            <div className="mt-2">
              <span className="text-xs border border-[var(--color-border)] px-2 py-0.5 rounded text-[var(--color-text-muted)]">Conference</span>
            </div>
          </article>
        </div>
      </section>

      {/* Experience - Visual Timeline */}
      <section id="experience" className="section border-b border-[var(--color-border)] pb-8 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-muted)] mb-6">
          Professional Experience
        </h2>
        <div className="relative border-l border-[var(--color-border)] ml-3 md:ml-6 space-y-10">
          {/* Item 1 */}
          <div className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-background)]"></div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
              <div className="sm:w-32 flex-shrink-0 text-sm font-mono text-[var(--color-text-muted)] whitespace-nowrap">
                May '25 - Aug '25
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--color-text)]">Machine Learning Research Intern</h3>
                <div className="text-sm text-[var(--color-primary)] mb-2">Indian Institute of Technology Mandi</div>
                <ul className="list-disc list-outside ml-4 text-sm text-[var(--color-text-muted)] space-y-1">
                  <li>Researched deep learning–based computer vision methods for small-object detection in high-resolution remote sensing imagery.</li>
                  <li>Designed and optimized attention-based architectures and implemented GPU-accelerated models using PyTorch.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[#cbd5e1] ring-4 ring-[var(--color-background)]"></div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
              <div className="sm:w-32 flex-shrink-0 text-sm font-mono text-[var(--color-text-muted)] whitespace-nowrap">
                May '24 - Jun '24
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--color-text)]">ML Project Intern</h3>
                <div className="text-sm text-[var(--color-primary)] mb-2">Indian Institute of Technology Kanpur</div>
                <ul className="list-disc list-outside ml-4 text-sm text-[var(--color-text-muted)] space-y-1">
                  <li>Supported migration of GNA operations to Genesys platform, ensuring system reliability.</li>
                  <li>Automated monitoring workflows impacting 1,200+ agents during rollout.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section pb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-muted)] mb-6">
          Selected Projects
        </h2>
        {/* We can reuse ProjectCard, but might check if it needs style tweaks for 'minimal' */}
        <div className="grid grid-cols-1 gap-6">
          <ProjectCard
            title="Smart Power Demand & Generation Prediction"
            description="Forecasting optimal power generation from environmental and demand data using Transformers."
            href="#"
            tags={["Transformers", "LSTM", "Docker"]}
          />
          <ProjectCard
            title="VARDAx Connect — ML-Powered WAF"
            description="Real-time threat detection and automated security response system for web applications."
            href="#"
            tags={["Cybersecurity", "Anomaly Detection"]}
          />
          <ProjectCard
            title="Brain Tumor Classification"
            description="Medical image analysis using Transfer Learning (VGG16/ResNet) with 92% accuracy."
            href="#"
            tags={["Medical AI", "Computer Vision"]}
          />
        </div>
      </section>
    </>
  );
}
