document.addEventListener('DOMContentLoaded', () => {
    const maturityData = [
        {
            level: 'Level 1',
            name: 'Foundational Case Management (Reactive)',
            characteristics: 'Basic tracking of inquiries (subscriptions, broken links, ad basic queries) within a contact center, often siloed. Agents manually manage interactions with limited centralized visibility.',
            knowledge: 'No formal knowledge base. Agents rely on ad-hoc internal notes, memory, or asking colleagues for common content queries, ad-hoc fixes, basic ad-support processes.',
            channels: 'Primarily inbound phone calls and generic email aliases (e.g., "info@"). No integrated digital channels for support.',
            agentExperience: 'Manual case creation and basic routing. Agents spend significant time searching for information or asking peers. Isolated agent experience.',
            selfService: 'Minimal: "Contact Us" form or generic FAQ page. No self-resolution for common media-specific issues like "why is my stream buffering?".',
            kpisImpact: '<strong>AHT:</strong> High, due to manual processes and information search. <br><strong>CSAT:</strong> Low/Inconsistent, due to varied agent responses and lack of consistency. <br><strong>Agent Empowerment:</strong> Low, agents feel unsupported and overloaded.'
        },
        {
            level: 'Level 2',
            name: 'Emerging Efficiency (Streamlined)',
            characteristics: 'Centralized case management for core audience/advertiser issues. Some basic automation (e.g., auto-assign). Focus on improving initial agent workflows within the contact center.',
            knowledge: 'Internal knowledge base (Salesforce Knowledge) being built for common issues like password resets, basic content troubleshooting, or ad-submission guidelines. Limited adoption by agents; often out-of-date.',
            channels: 'Phone, email, and basic web-to-case forms. Introduction of a basic live chat for general inquiries, handled by a subset of agents.',
            agentExperience: 'Improved, but still manual, case routing. Agents start using pre-defined templates for common media queries. Basic reporting on call volume and simple case types.',
            selfService: 'Basic FAQs on website for common issues (e.g., "How to reset password," "Where to find specific content"). Still limited to simple queries. Not deeply integrated with customer data.',
            kpisImpact: '<strong>AHT:</strong> Moderately High, some automation helps but agents still do much manual work. <br><strong>CSAT:</strong> Improving but still inconsistent, due to basic self-service and evolving agent tools. <br><strong>Agent Empowerment:</strong> Improving, but agents still face challenges with inconsistent knowledge and limited tools.'
        },
        {
            level: 'Level 3',
            name: 'Integrated Service Delivery (Multi-Channel)',
            characteristics: 'Consolidated view of audience/advertiser interactions across multiple channels within the contact center. Introduction of basic omnichannel routing and agent consoles.',
            knowledge: 'Internal knowledge base more widely used by agents, covering a growing range of content rights, technical FAQs (streaming errors), ad campaign FAQs, and editorial guidelines. Some efforts to expose select articles externally.',
            channels: 'Integrated phone, email, dedicated live chat, and some social media monitoring (e.g., for breaking news reactions or app issues). Dedicated email/forms for ad sales support.',
            agentExperience: 'Agents leverage knowledge articles for faster resolution. Introduction of macros and quick text for common media queries. Basic CTI (Computer Telephony Integration) to screen pop. Basic reporting on agent utilization and channel volumes.',
            selfService: 'Customer portal/community for content subscribers or advertisers to log cases, view content FAQs, and manage basic account settings. Some interactive forms.',
            kpisImpact: '<strong>AHT:</strong> Decreasing, due to easier access to knowledge and basic CTI. <br><strong>CSAT:</strong> Moderate, consistency improves with integrated channels and knowledge. <br><strong>Agent Empowerment:</strong> Moderate, agents have better tools but still face siloed data and limited automation for complex tasks.'
        },
        {
            level: 'Level 4',
            name: 'Proactive & Personalized Service (Intelligent Engagement)',
            characteristics: 'Focus on anticipating customer needs and delivering personalized experiences based on consumption habits or advertiser profiles. Data-driven insights from audience analytics inform contact center strategy.',
            knowledge: 'Robust internal and external knowledge base with personalized content suggestions for agents and users. Covers detailed content rights, technical diagnostics for streaming, and ad campaign best practices. AI-powered article recommendations.',
            channels: 'Omnichannel approach with seamlessly integrated phone, email, chat, web, social, and potentially messaging apps. Unified agent desktop displaying a 360-degree customer view. Intelligent routing (e.g., skill-based, VIP).',
            agentExperience: 'Comprehensive agent console with relevant customer information (viewing history, subscription tiers, ad campaign performance). Advanced routing and queue management. Basic AI assistance for article suggestions and case summaries. Agents guided to next-best actions.',
            selfService: 'Enhanced customer portal/community with personalized content recommendations, interactive troubleshooting for streaming issues, advertiser self-service for campaign reports, and basic AI-powered common query resolution.',
            kpisImpact: '<strong>AHT:</strong> Significantly decreasing, thanks to 360-degree view, intelligent routing, and AI assistance. <br><strong>CSAT:</strong> Higher, due to personalized and proactive service, and improved first contact resolution. <br><strong>Agent Empowerment:</strong> High, agents have rich context, AI support, and feel more efficient and effective.'
        },
        {
            level: 'Level 5',
            name: 'Intelligent Automation & Optimization (AI-Powered Resolution)',
            characteristics: 'Significant automation of routine media-related inquiries within the contact center (e.g., content availability, basic ad reporting). Leveraging AI for predictive insights into churn or ad campaign issues, enabling preventative action.',
            knowledge: 'Mature knowledge base with self-improving mechanisms, actively updated based on AI analysis of common media queries. AI-powered content suggestion and sentiment analysis driving knowledge improvements. Extensive use of external knowledge base by customers.',
            channels: 'Seamless omnichannel experience. AI-driven routing, self-service deflection, and initial bot handling of inquiries. Proactive alerts for content outages or ad campaign anomalies reaching agents.',
            agentExperience: 'Agents highly augmented by AI tools (e.g., next-best-action, sentiment analysis, AI-powered summaries, auto-population of case fields, automated email responses). Significant automation of repetitive tasks like data entry and follow-ups. Focus on complex problem-solving.',
            selfService: 'Advanced self-service with AI-powered chatbots for common queries (e.g., "Where can I watch F1 highlights?", "What\'s the status of my ad campaign?"), guided flows for technical media issues, and full access to personalized content libraries and advertising dashboards. Bots handle a significant percentage of inquiries.',
            kpisImpact: '<strong>AHT:</strong> Very Low, with AI handling routine tasks and augmenting agents for complex ones. <br><strong>CSAT:</strong> Very High, due to instant resolution for simple queries and highly efficient, expert agent interactions for complex ones. <br><strong>Agent Empowerment:</strong> Very High, agents are \'super-agents\' focused on high-value interactions, improving job satisfaction.'
        },
        {
            level: 'Level 6',
            name: 'Agentforce & Predictive Excellence (Preventative Media Service)',
            characteristics: 'Full realization of "Agentforce" – highly intelligent, predictive, and proactive service, leveraging Salesforce\'s advanced AI (e.g., Einstein GPT for Service). AI-driven insights for preventative action (e.g., predicting subscriber churn, identifying underperforming ad campaigns *before* they become issues). The contact center is a strategic profit center.',
            knowledge: 'Fully mature, dynamic, and self-improving knowledge ecosystem. AI actively identifies knowledge gaps related to new content launches, platform changes, or ad formats, and suggests new articles. AI generates and updates knowledge articles.',
            channels: 'Predictive engagement across all channels, driven by AI insights (e.g., proactive push notifications for sports fans with relevant content, personalized ad campaign insights, automated outreach for potential issues). Seamless, invisible transitions between AI-driven self-service and expert agents.',
            agentExperience: 'Agents are empowered by comprehensive AI assistance, including predictive insights, automated resolution for complex content licensing queries, and real-time guidance on ad campaign optimization. Agentforce handles first-level resolution, leaving agents to manage exceptions and build deep customer relationships. Supervisors use AI for coaching and performance optimization.',
            selfService: 'Fully intelligent self-service where AI anticipates content and service needs, resolves issues autonomously (e.g., automated refund for service interruption detected by system), and provides highly personalized, proactive support (e.g., "You recently watched X, you might like Y, and we\'ve extended your free trial by a week due to a recent platform issue.").',
            kpisImpact: '<strong>AHT:</strong> Minimal for agent-handled cases; many issues resolved by AI. <br><strong>CSAT:</strong> Exceptional, driven by proactive, personalized, and effortless experiences. <br><strong>Agent Empowerment:</strong> Elite, agents are strategic advisors, leveraging AI to achieve optimal outcomes and focus on high-touch, empathetic interactions.'
        }
    ];

    const tableBody = document.getElementById('maturityTableBody');
    const maturityModal = document.getElementById('maturityModal');
    const closeButton = document.querySelector('.close-button');
    const assessmentForm = document.getElementById('assessmentForm');
    const assessmentResult = document.getElementById('assessmentResult');

    // Populate the table
    maturityData.forEach((level, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${level.level}</td>
            <td>${level.name}</td>
            <td>${level.characteristics}</td>
            <td>${level.kpisImpact}</td>
        `;
        row.dataset.levelIndex = index; // Store index to retrieve full data later
        tableBody.appendChild(row);
    });

    // Handle row clicks to open modal
    tableBody.addEventListener('click', (event) => {
        const row = event.target.closest('tr');
        if (row) {
            const levelIndex = row.dataset.levelIndex;
            const levelData = maturityData[levelIndex];

            document.getElementById('modalLevelName').textContent = `${levelData.level}: ${levelData.name}`;
            document.getElementById('modalCharacteristics').innerHTML = levelData.characteristics;
            document.getElementById('modalKnowledge').innerHTML = levelData.knowledge;
            document.getElementById('modalChannels').innerHTML = levelData.channels;
            document.getElementById('modalAgentExperience').innerHTML = levelData.agentExperience;
            document.getElementById('modalSelfService').innerHTML = levelData.selfService;
            document.getElementById('modalKpisImpact').innerHTML = levelData.kpisImpact;

            maturityModal.style.display = 'block';
        }
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        maturityModal.style.display = 'none';
    });

    // Close modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target == maturityModal) {
            maturityModal.style.display = 'none';
        }
    });

    // Handle self-assessment form submission
    assessmentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let totalScore = 0;
        let answeredQuestions = 0;

        // Get selected values from radio buttons
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');
        const q4 = document.querySelector('input[name="q4"]:checked');

        if (q1) { totalScore += parseInt(q1.value); answeredQuestions++; }
        if (q2) { totalScore += parseInt(q2.value); answeredQuestions++; }
        if (q3) { totalScore += parseInt(q3.value); answeredQuestions++; }
        if (q4) { totalScore += parseInt(q4.value); answeredQuestions++; }

        if (answeredQuestions === 0) {
            assessmentResult.innerHTML = '<p style="color: #dc3545;">Please answer at least one question to get an assessment.</p>';
            assessmentResult.style.borderColor = '#dc3545';
            assessmentResult.style.backgroundColor = '#f8d7da';
            assessmentResult.style.color = '#721c24';
            return;
        }

        // Calculate average score (out of 5 per question, so overall average is also out of 5)
        const averageScore = totalScore / answeredQuestions;

        let predictedLevel = '';
        let levelDescription = '';

        if (averageScore >= 4.5) {
            predictedLevel = 'Level 6: Agentforce & Predictive Excellence';
            levelDescription = 'Your media contact center is at the forefront of Service Cloud maturity, leveraging advanced AI and automation for proactive and preventative service. You are truly empowering your agents and achieving exceptional KPI results.';
        } else if (averageScore >= 3.5) {
            predictedLevel = 'Level 5: Intelligent Automation & Optimization';
            levelDescription = 'Your media contact center is heavily integrating AI and automation to resolve issues and optimize operations. You are well on your way to a highly efficient and intelligent service model.';
        } else if (averageScore >= 2.5) {
            predictedLevel = 'Level 4: Proactive & Personalized Service';
            levelDescription = 'You are effectively using omnichannel strategies and data to offer proactive and personalized service. Your agents have a strong foundation of tools and insights.';
        } else if (averageScore >= 1.5) {
            predictedLevel = 'Level 3: Integrated Service Delivery';
            levelDescription = 'You have integrated multiple service channels and a foundational knowledge base. There\'s a good base to build upon for further efficiency and personalization.';
        } else {
            predictedLevel = 'Level 1-2: Foundational Case Management or Emerging Efficiency';
            levelDescription = 'Your media contact center is primarily focused on basic case management. Significant opportunities exist to leverage Service Cloud for improved efficiency, agent empowerment, and customer satisfaction.';
        }

        assessmentResult.innerHTML = `
            <p>Based on your answers, your estimated Service Cloud Contact Center Maturity Level is:</p>
            <h3>${predictedLevel}</h3>
            <p>${levelDescription}</p>
            <p>Consider reviewing the characteristics of the next levels in the table above to identify your strategic roadmap.</p>
        `;
        // Reset to default success styling
        assessmentResult.style.borderColor = '#28a745';
        assessmentResult.style.backgroundColor = '#d4edda';
        assessmentResult.style.color = '#155724';
    });
});