/**
 * Rainbow Six Siege Operator Picker - Application
 * This file contains the application logic for the web interface
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // Set up navigation
    setupNavigation();

    // Set up tabs
    setupTabs();

    // Load initial data
    loadAllOperators();

    // Load featured operator
    loadFeaturedOperator();

    // Set up action buttons
    setupActionButtons();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.sidebar nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Hide all panels
            const panels = document.querySelectorAll('.panel');
            panels.forEach(panel => panel.classList.remove('active'));

            // Show the selected panel
            const panelId = this.getAttribute('data-panel');
            document.getElementById(panelId).classList.add('active');
        });
    });
}

function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent tabs container
            const tabsContainer = this.closest('.tabs');

            // Remove active class from all buttons in this container
            tabsContainer.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Get the tab content id
            const tabId = this.getAttribute('data-tab');

            // Get the parent panel
            const panel = this.closest('.panel');

            // Hide all tab contents in this panel
            panel.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Show the selected tab content
            panel.querySelector(`#${tabId}`).classList.add('active');
        });
    });
}

function setupActionButtons() {
    // Featured Operator refresh button
    const refreshFeaturedBtn = document.getElementById('refresh-featured-operator');
    if (refreshFeaturedBtn) {
        refreshFeaturedBtn.addEventListener('click', function() {
            loadFeaturedOperator();
        });
    }

    // Random Attacker button
    const randomAttackerBtn = document.getElementById('get-random-attacker');
    if (randomAttackerBtn) {
        randomAttackerBtn.addEventListener('click', function() {
            const operator = siegePicker.getRandomAttacker();
            displayOperator(operator, 'random-attacker-display');
        });
    }

    // Random Defender button
    const randomDefenderBtn = document.getElementById('get-random-defender');
    if (randomDefenderBtn) {
        randomDefenderBtn.addEventListener('click', function() {
            const operator = siegePicker.getRandomDefender();
            displayOperator(operator, 'random-defender-display');
        });
    }

    // Random Strategy button
    const randomStrategyBtn = document.getElementById('get-random-strategy');
    if (randomStrategyBtn) {
        randomStrategyBtn.addEventListener('click', function() {
            const isAttack = document.querySelector('input[name="strategy-side"]:checked').value === 'attack';
            const strategy = isAttack ? siegePicker.getRandomAttackStrategy() : siegePicker.getRandomDefenseStrategy();
            displayStrategy(strategy, 'random-strategy-display');
        });
    }

    // Filter by Speed button
    const filterSpeedBtn = document.getElementById('filter-by-speed');
    if (filterSpeedBtn) {
        filterSpeedBtn.addEventListener('click', function() {
            const speed = parseInt(document.getElementById('speed-select').value);
            const operators = siegePicker.getOperatorsBySpeed(speed);
            displayFilterResults(operators, 'speed-filter-results', speed, 'speed');
        });
    }

    // Filter by Armor button
    const filterArmorBtn = document.getElementById('filter-by-armor');
    if (filterArmorBtn) {
        filterArmorBtn.addEventListener('click', function() {
            const armor = parseInt(document.getElementById('armor-select').value);
            const operators = siegePicker.getOperatorsByArmor(armor);
            displayFilterResults(operators, 'armor-filter-results', armor, 'armor');
        });
    }
}

function loadAllOperators() {
    // Load attackers
    const attackers = siegePicker.getAttackers();
    const attackersGrid = document.getElementById('attackers-grid');

    if (attackersGrid) {
        attackersGrid.innerHTML = '';
        attackers.forEach(operator => {
            attackersGrid.appendChild(createOperatorCard(operator));
        });
    }

    // Load defenders
    const defenders = siegePicker.getDefenders();
    const defendersGrid = document.getElementById('defenders-grid');

    if (defendersGrid) {
        defendersGrid.innerHTML = '';
        defenders.forEach(operator => {
            defendersGrid.appendChild(createOperatorCard(operator));
        });
    }
}

function createOperatorCard(operator) {
    // Clone the template
    const template = document.getElementById('operator-card-template');
    const card = document.importNode(template.content, true).querySelector('.operator-card');

    // Set data attribute for styling
    card.setAttribute('data-side', operator.side);

    // Fill in the data
    card.querySelector('.operator-name').textContent = operator.name;
    card.querySelector('.operator-side').textContent = operator.side;
    card.querySelector('.operator-ability').textContent = `Ability: ${operator.specialAbility}`;
    card.querySelector('.operator-speed').textContent = `Speed: ${operator.speed}`;
    card.querySelector('.operator-armor').textContent = `Armor: ${operator.armor}`;

    return card;
}

function createStrategyCard(strategy) {
    // Clone the template
    const template = document.getElementById('strategy-card-template');
    const card = document.importNode(template.content, true).querySelector('.strategy-card');

    // Set data attribute for styling
    card.setAttribute('data-side', strategy.side);

    // Fill in the data
    card.querySelector('.strategy-name').textContent = strategy.name;
    card.querySelector('.strategy-side').textContent = strategy.side;
    card.querySelector('.strategy-description').textContent = strategy.description;

    return card;
}

function displayOperator(operator, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        container.appendChild(createOperatorCard(operator));
    }
}

function displayStrategy(strategy, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        container.appendChild(createStrategyCard(strategy));
    }
}

/**
 * Creates an extended operator card with additional information for the featured operator
 */
function createFeaturedOperatorCard(operator) {
    // Clone the template
    const template = document.getElementById('featured-operator-card-template');
    const card = document.importNode(template.content, true).querySelector('.featured-operator-card');

    // Set data attribute for styling
    card.setAttribute('data-side', operator.side);

    // Fill in the basic data
    card.querySelector('.operator-name').textContent = operator.name;
    card.querySelector('.operator-side').textContent = operator.side;
    card.querySelector('.operator-ability').textContent = `Ability: ${operator.specialAbility}`;
    card.querySelector('.operator-speed').textContent = `Speed: ${operator.speed}`;
    card.querySelector('.operator-armor').textContent = `Armor: ${operator.armor}`;

    // Fill in the extended data
    card.querySelector('.operator-organization span').textContent = operator.organization || "N/A";
    card.querySelector('.operator-birthplace span').textContent = operator.birthplace || "N/A";
    card.querySelector('.operator-biography p').textContent = operator.biography || "No biography available.";

    return card;
}

/**
 * Displays a featured operator with extended information
 */
function displayFeaturedOperator(operator, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        container.appendChild(createFeaturedOperatorCard(operator));
    }
}

/**
 * Loads a random operator (either attacker or defender) and displays it in the featured operator section
 */
function loadFeaturedOperator() {
    // Get a random operator (50% chance for attacker, 50% chance for defender)
    const operator = Math.random() < 0.5 ? siegePicker.getRandomAttacker() : siegePicker.getRandomDefender();

    // Display the operator in the featured operator section with extended information
    displayFeaturedOperator(operator, 'featured-operator-display');
}

function displayFilterResults(operators, containerId, rating, filterType) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';

        if (operators.length === 0) {
            const noResults = document.createElement('p');
            noResults.textContent = `No operators found with ${filterType} rating ${rating}`;
            noResults.style.textAlign = 'center';
            container.appendChild(noResults);
            return;
        }

        // Create tabs
        const tabsDiv = document.createElement('div');
        tabsDiv.className = 'tabs';

        const attackerBtn = document.createElement('button');
        attackerBtn.className = 'tab-button active';
        attackerBtn.setAttribute('data-tab', `${containerId}-attackers`);
        attackerBtn.textContent = 'Attackers';

        const defenderBtn = document.createElement('button');
        defenderBtn.className = 'tab-button';
        defenderBtn.setAttribute('data-tab', `${containerId}-defenders`);
        defenderBtn.textContent = 'Defenders';

        tabsDiv.appendChild(attackerBtn);
        tabsDiv.appendChild(defenderBtn);

        // Create tab contents
        const attackersContent = document.createElement('div');
        attackersContent.className = 'tab-content active';
        attackersContent.id = `${containerId}-attackers`;

        const defendersContent = document.createElement('div');
        defendersContent.className = 'tab-content';
        defendersContent.id = `${containerId}-defenders`;

        // Create grids
        const attackersGrid = document.createElement('div');
        attackersGrid.className = 'operator-grid';

        const defendersGrid = document.createElement('div');
        defendersGrid.className = 'operator-grid';

        // Filter operators
        const attackers = operators.filter(op => op.side === 'Attacker');
        const defenders = operators.filter(op => op.side === 'Defender');

        // Add operators to grids
        attackers.forEach(operator => {
            attackersGrid.appendChild(createOperatorCard(operator));
        });

        defenders.forEach(operator => {
            defendersGrid.appendChild(createOperatorCard(operator));
        });

        // Add grids to tab contents
        attackersContent.appendChild(attackersGrid);
        defendersContent.appendChild(defendersGrid);

        // Add everything to container
        container.appendChild(tabsDiv);
        container.appendChild(attackersContent);
        container.appendChild(defendersContent);

        // Set up tab functionality
        setupTabs();
    }
}
