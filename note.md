1- code structure 
<section id="algoName">
<section id="section-id">

    <div class="code-wrap">

        <!-- Code Header -->
        <div class="code-header">

            <span class="code-lang">
                Topic / Algorithm Name
            </span>

            <div style="display:flex;gap:6px">

                <!-- Language Selector -->
                <button class="language-select" title="Select language">
                    <select id="languageSelect" onchange="displayCode()">
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                    </select>
                </button>

                <!-- Expand Button -->
                <button class="expand-btn" title="View fullscreen">
                    ⛶
                </button>

                <!-- Copy Button -->
                <button class="copy-btn">
                    Copy
                </button>

            </div>
        </div>


        <!-- Java Code -->
        <pre id="javaCode"><code>
Java code goes here...
        </code></pre>


        <!-- Python Code -->
        <pre id="pythonCode" style="display:none;"><code>
Python code goes here...
        </code></pre>


        <!-- Output Heading -->
        <h4>
            Output
        </h4>


        <!-- Output -->
        <div class="output-block">
            <pre><code>
Output goes here...
            </code></pre>
        </div>

    </div>

</section>
</section>