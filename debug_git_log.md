commit 3fa9fbebebe961daf8432b0e0f7633de22b858e2
Author: devindushanek <devindushanek@users.noreply.github.com>
Date:   Sat Jan 10 21:29:17 2026 -0600

    Add internal source conflicts to Finance page

diff --git a/Finance-Detail.html b/Finance-Detail.html
index 90130dc..2675ca8 100644
--- a/Finance-Detail.html
+++ b/Finance-Detail.html
@@ -630,150 +630,140 @@
                     <tr style="background: rgba(64, 173, 72, 0.1); font-weight: 800;">
                         <td>TOTAL GROSS REVENUE</td>
                         <td class="highlight">$330,000</td>
-                        <td class="highlight">$417,000</td>
-                        <td class="highlight">$500,000</td>
-                        <td class="highlight">$620,000</td>
-                        <td class="highlight">$730,000</td>
-                    </tr>
-                </tbody>
-            </table>
-        </section>
-
-        <!-- Monthly Breakdown Section -->
-        <section>
-            <h2>Monthly Detailed Projections (Years 1-2)</h2>
-            <p style="margin-bottom: 20px;">Toggle between **Cash Flow** (P&L) and **Revenue Mix** (Source Breakdown).
-            </p>
-
-            <div class="tab-container">
-                <div class="view-controls">
-                    <div class="tab-buttons">
-                        <button class="tab-btn active" onclick="switchTab(event, 'year1')">Year 1 ($330k)</button>
-                        <button class="tab-btn" onclick="switchTab(event, 'year2')">Year 2 ($417k)</button>
-                    </div>
-                    <div class="view-toggle">
-                        <button class="toggle-btn active" onclick="switchView(event, 'cashflow')">Cash Flow</button>
-                        <button class="toggle-btn" onclick="switchView(event, 'revmix')">Revenue Mix</button>
-                    </div>
-                </div>
-
-                <!-- Year 1 Content -->
-                <div id="year1" class="tab-content active">
-                    <!-- Year 1 Cash Flow -->
-                    <div class="view-pane cashflow active">
-                        <table class="data-table">
-                            <thead>
-                                <tr>
-                                    <th>Month</th>
-                                    <th>Total Revenue</th>
-                                    <th>COGS (32%)</th>
-                                    <th>Labour (36%)</th>
-                                    <th>Fixed OpEx</th>
-                                    <th>EBITDA</th>
-                                </tr>
-                            </thead>
-                            <tbody>
-                                <tr>
-                                    <td>January</td>
-                                    <td>$12,000</td>
-                                    <td>($3,840)</td>
-                                    <td>($4,320)</td>
-                                    <td>($6,420)</td>
-                                    <td style="color: var(--sams-orange);">($2,580)</td>
-                                </tr>
-                                <tr>
-                                    <td>February</td>
-                                    <td>$13,000</td>
-                                    <td>($4,160)</td>
-                                    <td>($4,680)</td>
-                                    <td>($6,420)</td>
-                                    <td style="color: var(--sams-orange);">($2,260)</td>
-                                </tr>
-                                <tr>
-                                    <td>March</td>
-                                    <td>$15,000</td>
-                                    <td>($4,800)</td>
-                                    <td>($5,400)</td>
-                                    <td>($6,420)</td>
-                                    <td style="color: var(--sams-orange);">($1,620)</td>
-                                </tr>
-                                <tr>
-                                    <td>April</td>
-                                    <td>$18,000</td>
-                                    <td>($5,760)</td>
-                                    <td>($6,480)</td>
-                                    <td>($6,420)</td>
-                                    <td style="color: var(--sams-orange);">($660)</td>
-                                </tr>
-                                <tr>
-                                    <td>May</td>
-                                    <td>$32,000</td>
-                                    <td>($10,240)</td>
-                                    <td>($11,520)</td>
-                                    <td>($6,420)</td>
-                                    <td class="highlight">$3,820</td>
-                                </tr>
-                                <tr>
-                                    <td>June</td>
-                                    <td>$55,000</td>
-                                    <td>($17,600)</td>
-                                    <td>($19,800)</td>
-                                    <td>($6,420)</td>
-                                    <td class="highlight">$11,180</td>
-                                </tr>
-                                <tr>
-                                    <td>July</td>
-                                    <td>$65,000</td>
-                                    <td>($20,800)</td>
-                                    <td>($23,400)</td>
-                                    <td>($6,420)</td>
-                                    <td class="highlight">$14,380</td>
-                                </tr>
-                                <tr>
-                                    <td>August</td>
-                                    <td>$60,000</td>
-                                    <td>($19,200)</td>
-                                    <td>($21,600)</td>
-                                    <td>($6,420)</td>
-                                    <td class="highlight">$12,780</td>
-                                </tr>
-                                <tr>
-                                    <td>September</td>
-                                    <td>$28,000</td>
-                                    <td>($8,960)</td>
-                                    <td>($10,080)</td>
-                                    <td>($6,420)</td>
-                                    <td class="highlight">$2,540</td>
-                                </tr>
-                                <tr>
-                                    <td>October</td>
-                                    <td>$14,000</td>
-                                    <td>($4,480)</td>
-                                    <td>($5,040)</td>
-                                    <td>($6,420)</td>
-                                    <td style="color: var(--sams-orange);">($1,940)</td>
-                                </tr>
-                                <tr>
-                                    <td>November</td>
-                                    <td>$9,000</td>
-                                    <td>($2,880)</td>
-                                    <td>($3,240)</td>
-                                    <td>($6,420)</td>
-                                    <td style="color: var(--sams-orange);">($3,540)</td>
-                                </tr>
-                                <tr>
-                                    <td>December</td>
-                                    <td>$9,000</td>
-                                    <td>($2,880)</td>
-                                    <td>($3,240)</td>
-                                    <td>($6,420)</td>
-                                    <td style="color: var(--sams-orange);">($3,540)</td>
-                                </tr>
-                            </tbody>
-                        </table>
-                    </div>
-                </div>
-            </div>
+                        </p>
+
+                        <div class="tab-container">
+                            <div class="view-controls">
+                                <div class="tab-buttons">
+                                    <button class="tab-btn active" onclick="switchTab(event, 'year1')">Year 1
+                                        ($330k)</button>
+                                    <button class="tab-btn" onclick="switchTab(event, 'year2')">Year 2 ($417k)</button>
+                                </div>
+                                <div class="view-toggle">
+                                    <button class="toggle-btn active" onclick="switchView(event, 'cashflow')">Cash
+                                        Flow</button>
+                                    <button class="toggle-btn" onclick="switchView(event, 'revmix')">Revenue
+                                        Mix</button>
+                                </div>
+                            </div>
+
+                            <!-- Year 1 Content -->
+                            <div id="year1" class="tab-content active">
+                                <!-- Year 1 Cash Flow -->
+                                <div class="view-pane cashflow active">
+                                    <table class="data-table">
+                                        <thead>
+                                            <tr>
+                                                <th>Month</th>
+                                                <th>Total Revenue</th>
+                                                <th>COGS (32%)</th>
+                                                <th>Labour (36%)</th>
+                                                <th>Fixed OpEx</th>
+                                                <th>EBITDA</th>
+                                            </tr>
+                                        </thead>
+                                        <tbody>
+                                            <tr>
+                                                <td>January</td>
+                                                <td>$12,000</td>
+                                                <td>($3,840)</td>
+                                                <td>($4,320)</td>
+                                                <td>($6,420)</td>
+                                                <td style="color: var(--sams-orange);">($2,580)</td>
+                                            </tr>
+                                            <tr>
+                                                <td>February</td>
+                                                <td>$13,000</td>
+                                                <td>($4,160)</td>
+                                                <td>($4,680)</td>
+                                                <td>($6,420)</td>
+                                                <td style="color: var(--sams-orange);">($2,260)</td>
+                                            </tr>
+                                            <tr>
+                                                <td>March</td>
+                                                <td>$15,000</td>
+                                                <td>($4,800)</td>
+                                                <td>($5,400)</td>
+                                                <td>($6,420)</td>
+                                                <td style="color: var(--sams-orange);">($1,620)</td>
+                                            </tr>
+                                            <tr>
+                                                <td>April</td>
+                                                <td>$18,000</td>
+                                                <td>($5,760)</td>
+                                                <td>($6,480)</td>
+                                                <td>($6,420)</td>
+                                                <td style="color: var(--sams-orange);">($660)</td>
+                                            </tr>
+                                            <tr>
+                                                <td>May</td>
+                                                <td>$32,000</td>
+                                                <td>($10,240)</td>
+                                                <td>($11,520)</td>
+                                                <td>($6,420)</td>
+                                                <td class="highlight">$3,820</td>
+                                            </tr>
+                                            <tr>
+                                                <td>June</td>
+                                                <td>$55,000</td>
+                                                <td>($17,600)</td>
+                                                <td>($19,800)</td>
+                                                <td>($6,420)</td>
+                                                <td class="highlight">$11,180</td>
+                                            </tr>
+                                            <tr>
+                                                <td>July</td>
+                                                <td>$65,000</td>
+                                                <td>($20,800)</td>
+                                                <td>($23,400)</td>
+                                                <td>($6,420)</td>
+                                                <td class="highlight">$14,380</td>
+                                            </tr>
+                                            <tr>
+                                                <td>August</td>
+                                                <td>$60,000</td>
+                                                <td>($19,200)</td>
+                                                <td>($21,600)</td>
+                                                <td>($6,420)</td>
+                                                <td class="highlight">$12,780</td>
+                                            </tr>
+                                            <tr>
+                                                <td>September</td>
+                                                <td>$28,000</td>
+                                                <td>($8,960)</td>
+                                                <td>($10,080)</td>
+                                                <td>($6,420)</td>
+                                                <td class="highlight">$2,540</td>
+                                            </tr>
+                                            <tr>
+                                                <td>October</td>
+                                                <td>$14,000</td>
+                                                <td>($4,480)</td>
+                                                <td>($5,040)</td>
+                                                <td>($6,420)</td>
+                                                <td style="color: var(--sams-orange);">($1,940)</td>
+                                            </tr>
+                                            <tr>
+                                                <td>November</td>
+                                                <td>$9,000</td>
+                                                <td>($2,880)</td>
+                                                <td>($3,240)</td>
+                                                <td>($6,420)</td>
+                                                <td style="color: var(--sams-orange);">($3,540)</td>
+                                            </tr>
+                                            <tr>
+                                                <td>December</td>
+                                                <td>$9,000</td>
+                                                <td>($2,880)</td>
+                                                <td>($3,240)</td>
+                                                <td>($6,420)</td>
+                                                <td style="color: var(--sams-orange);">($3,540)</td>
+                                            </tr>
+                                        </tbody>
+                                    </table>
+                                </div>
+                            </div>
+                        </div>
         </section>
 
         <div class="source-box">

commit 84972e3739103228465f170baf9db3277a823f0e
Author: Your Name <you@example.com>
Date:   Sat Jan 10 18:52:52 2026 -0600

    Incorporate Legacy Plan conflicts and suggestions across all detail pages

diff --git a/Finance-Detail.html b/Finance-Detail.html
index aca71f3..90130dc 100644
--- a/Finance-Detail.html
+++ b/Finance-Detail.html
@@ -42,6 +42,63 @@
             --table-header: rgba(0, 0, 0, 0.03);
         }
 
+        .conflict-alert {
+            background: rgba(250, 75, 6, 0.08);
+            border-left: 4px solid var(--sams-orange);
+            padding: 20px;
+            border-radius: 16px;
+            margin: 20px 0;
+            position: relative;
+        }
+
+        .conflict-alert.resolved {
+            background: rgba(64, 173, 72, 0.08);
+            border-left-color: var(--sams-green);
+        }
+
+        .conflict-header {
+            display: flex;
+            align-items: center;
+            gap: 10px;
+            margin-bottom: 10px;
+        }
+
+        .conflict-icon {
+            font-size: 1.2rem;
+        }
+
+        .conflict-title {
+            font-weight: 800;
+            text-transform: uppercase;
+            font-size: 0.8rem;
+            letter-spacing: 1px;
+            color: var(--sams-orange);
+        }
+
+        .conflict-alert.resolved .conflict-title {
+            color: var(--sams-green);
+        }
+
+        .recommendation-box {
+            background: var(--card-bg);
+            padding: 15px;
+            border-radius: 12px;
+            margin-top: 15px;
+            border: 1px solid var(--border-color);
+        }
+
+        .recommendation-tag {
+            background: var(--sams-teal);
+            color: #000;
+            padding: 2px 8px;
+            border-radius: 4px;
+            font-size: 0.7rem;
+            font-weight: 800;
+            text-transform: uppercase;
+            display: inline-block;
+            margin-bottom: 8px;
+        }
+
         * {
             margin: 0;
             padding: 0;
@@ -223,72 +280,6 @@
             margin-top: 2px;
         }
 
-        .category-detail-grid {
-            display: grid;
-            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
-            gap: 25px;
-        }
-
-        .cat-detail-card {
-            background: var(--card-bg);
-            padding: 25px;
-            border-radius: 24px;
-            border: 1px solid var(--border-color);
-            display: flex;
-            flex-direction: column;
-            box-shadow: var(--shadow);
-        }
-
-        .cat-detail-card h4 {
-            color: var(--sams-yellow);
-            margin-bottom: 15px;
-            font-family: 'Outfit', sans-serif;
-            font-size: 1.3rem;
-            border-bottom: 1px solid var(--border-color);
-            padding-bottom: 10px;
-        }
-
-        .cat-detail-card .meta {
-            display: flex;
-            justify-content: space-between;
-            margin-bottom: 15px;
-            font-size: 0.8rem;
-            font-weight: 600;
-            text-transform: uppercase;
-        }
-
-        .cat-detail-card .phase {
-            color: var(--sams-pink);
-        }
-
-        .cat-detail-card .margin {
-            color: var(--sams-teal);
-        }
-
-        .cat-detail-card p {
-            font-size: 0.9rem;
-            color: var(--text-muted);
-            margin-bottom: 15px;
-            flex-grow: 1;
-        }
-
-        .cat-detail-card ul {
-            list-style: none;
-            font-size: 0.85rem;
-            color: var(--text-main);
-        }
-
-        .cat-detail-card li {
-            margin-bottom: 8px;
-            display: flex;
-            gap: 8px;
-        }
-
-        .cat-detail-card li::before {
-            content: '→';
-            color: var(--sams-teal);
-        }
-
         .logic-box {
             background: var(--table-header);
             padding: 30px;
@@ -511,6 +502,23 @@
         <!-- Historical Baseline -->
         <section>
             <h2>Historical Baseline (Actuals)</h2>
+
+            <!-- Conflict Alert: Growth Logic -->
+            <div class="conflict-alert">
+                <div class="conflict-header">
+                    <span class="conflict-icon">⚠️</span>
+                    <span class="conflict-title">Conflict: Growth Logic</span>
+                </div>
+                <p style="font-size: 0.9rem;">Historical data (2021-2024) shows a flat revenue trend (~$100k). Our
+                    projections jump to $330k in Year 1.</p>
+                <div class="recommendation-box">
+                    <span class="recommendation-tag">Antigravity Suggestion</span>
+                    <p style="font-size: 0.85rem; font-style: italic;"><strong>Ambitious Model is Correct.</strong>
+                        Historical data reflects "Passive" management with limited hours and no rentals. The addition of
+                        watercraft, morning cafe, and professional marketing justifies the 3x growth target.</p>
+                </div>
+            </div>
+
             <div class="stat-grid">
                 <div class="stat-card" onclick="openModal('2021')">
                     <span class="label">2021 Revenue</span>
@@ -540,8 +548,24 @@
         <!-- 5-Year Annual Projection Breakdown -->
         <section>
             <h2>5-Year Revenue Projection Breakdown</h2>
-            <p style="margin-bottom: 20px;">Annual targets based on the "Ambitious" growth model and categorical service
-                phasing.</p>
+
+            <!-- Conflict Alert: Investment Scale -->
+            <div class="conflict-alert">
+                <div class="conflict-header">
+                    <span class="conflict-icon">⚠️</span>
+                    <span class="conflict-title">Conflict: Investment Scale</span>
+                </div>
+                <p style="font-size: 0.9rem;">The Legacy Plan (Gamma) proposes a <strong>$1.84M capital
+                        investment</strong>. Our current model is a <strong>lean rollout</strong> focused on immediate
+                    cash flow.</p>
+                <div class="recommendation-box">
+                    <span class="recommendation-tag">Antigravity Suggestion</span>
+                    <p style="font-size: 0.85rem; font-style: italic;"><strong>Hybrid Approach.</strong> Proceed with
+                        the Lean Model for Years 1-2 to stabilize operations and prove the concept. Pivot to the $1.84M
+                        Capital Model in Year 3 once the "Ambitious" revenue targets are met.</p>
+                </div>
+            </div>
+
             <table class="data-table">
                 <thead>
                     <tr>
@@ -748,415 +772,6 @@
                             </tbody>
                         </table>
                     </div>
-                    <!-- Year 1 Revenue Mix -->
-                    <div class="view-pane revmix">
-                        <table class="data-table">
-                            <thead>
-                                <tr>
-                                    <th>Month</th>
-                                    <th>Core F&B + Ice Cream</th>
-                                    <th>Rentals</th>
-                                    <th>Total Revenue</th>
-                                </tr>
-                            </thead>
-                            <tbody>
-                                <tr>
-                                    <td>January</td>
-                                    <td>$12,000</td>
-                                    <td>$0</td>
-                                    <td>$12,000</td>
-                                </tr>
-                                <tr>
-                                    <td>February</td>
-                                    <td>$13,000</td>
-                                    <td>$0</td>
-                                    <td>$13,000</td>
-                                </tr>
-                                <tr>
-                                    <td>March</td>
-                                    <td>$15,000</td>
-                                    <td>$0</td>
-                                    <td>$15,000</td>
-                                </tr>
-                                <tr>
-                                    <td>April</td>
-                                    <td>$18,000</td>
-                                    <td>$0</td>
-                                    <td>$18,000</td>
-                                </tr>
-                                <tr>
-                                    <td>May</td>
-                                    <td>$30,500</td>
-                                    <td>$1,500</td>
-                                    <td>$32,000</td>
-                                </tr>
-                                <tr>
-                                    <td>June</td>
-                                    <td>$51,000</td>
-                                    <td>$4,000</td>
-                                    <td>$55,000</td>
-                                </tr>
-                                <tr>
-                                    <td>July</td>
-                                    <td>$60,000</td>
-                                    <td>$5,000</td>
-                                    <td>$65,000</td>
-                                </tr>
-                                <tr>
-                                    <td>August</td>
-                                    <td>$56,000</td>
-                                    <td>$4,000</td>
-                                    <td>$60,000</td>
-                                </tr>
-                                <tr>
-                                    <td>September</td>
-                                    <td>$27,500</td>
-                                    <td>$500</td>
-                                    <td>$28,000</td>
-                                </tr>
-                                <tr>
-                                    <td>October</td>
-                                    <td>$14,000</td>
-                                    <td>$0</td>
-                                    <td>$14,000</td>
-                                </tr>
-                                <tr>
-                                    <td>November</td>
-                                    <td>$9,000</td>
-                                    <td>$0</td>
-                                    <td>$9,000</td>
-                                </tr>
-                                <tr>
-                                    <td>December</td>
-                                    <td>$9,000</td>
-                                    <td>$0</td>
-                                    <td>$9,000</td>
-                                </tr>
-                                <tr style="background: rgba(64, 173, 72, 0.1); font-weight: 800;">
-                                    <td>TOTAL</td>
-                                    <td>$315,000</td>
-                                    <td>$15,000</td>
-                                    <td>$330,000</td>
-                                </tr>
-                            </tbody>
-                        </table>
-                    </div>
-                </div>
-
-                <!-- Year 2 Content -->
-                <div id="year2" class="tab-content">
-                    <!-- Year 2 Cash Flow -->
-                    <div class="view-pane cashflow active">
-                        <table class="data-table">
-                            <thead>
-                                <tr>
-                                    <th>Month</th>
-                                    <th>Total Revenue</th>
-                                    <th>COGS (31.5%)</th>
-                                    <th>Labour (35%)</th>
-                                    <th>Fixed OpEx</th>
-                                    <th>EBITDA</th>
-                                </tr>
-                            </thead>
-                            <tbody>
-                                <tr>
-                                    <td>January</td>
-                                    <td>$15,163</td>
-                                    <td>($4,776)</td>
-                                    <td>($5,307)</td>
-                                    <td>($6,858)</td>
-                                    <td style="color: var(--sams-orange);">($1,778)</td>
-                                </tr>
-                                <tr>
-                                    <td>February</td>
-                                    <td>$16,427</td>
-                                    <td>($5,174)</td>
-                                    <td>($5,749)</td>
-                                    <td>($6,858)</td>
-                                    <td style="color: var(--sams-orange);">($1,354)</td>
-                                </tr>
-                                <tr>
-                                    <td>March</td>
-                                    <td>$18,954</td>
-                                    <td>($5,970)</td>
-                                    <td>($6,634)</td>
-                                    <td>($6,858)</td>
-                                    <td style="color: var(--sams-orange);">($508)</td>
-                                </tr>
-                                <tr>
-                                    <td>April</td>
-                                    <td>$22,745</td>
-                                    <td>($7,165)</td>
-                                    <td>($7,961)</td>
-                                    <td>($6,858)</td>
-                                    <td class="highlight">$761</td>
-                                </tr>
-                                <tr>
-                                    <td>May</td>
-                                    <td>$40,436</td>
-                                    <td>($12,737)</td>
-                                    <td>($14,153)</td>
-                                    <td>($6,858)</td>
-                                    <td class="highlight">$6,688</td>
-                                </tr>
-                                <tr>
-                                    <td>June</td>
-                                    <td>$69,500</td>
-                                    <td>($21,893)</td>
-                                    <td>($24,325)</td>
-                                    <td>($6,858)</td>
-                                    <td class="highlight">$16,424</td>
-                                </tr>
-                                <tr>
-                                    <td>July</td>
-                                    <td>$82,136</td>
-                                    <td>($25,873)</td>
-                                    <td>($28,748)</td>
-                                    <td>($6,858)</td>
-                                    <td class="highlight">$20,657</td>
-                                </tr>
-                                <tr>
-                                    <td>August</td>
-                                    <td>$75,818</td>
-                                    <td>($23,883)</td>
-                                    <td>($26,536)</td>
-                                    <td>($6,858)</td>
-                                    <td class="highlight">$18,541</td>
-                                </tr>
-                                <tr>
-                                    <td>September</td>
-                                    <td>$35,382</td>
-                                    <td>($11,145)</td>
-                                    <td>($12,384)</td>
-                                    <td>($6,858)</td>
-                                    <td class="highlight">$4,995</td>
-                                </tr>
-                                <tr>
-                                    <td>October</td>
-                                    <td>$17,691</td>
-                                    <td>($5,573)</td>
-                                    <td>($6,192)</td>
-                                    <td>($6,858)</td>
-                                    <td style="color: var(--sams-orange);">($932)</td>
-                                </tr>
-                                <tr>
-                                    <td>November</td>
-                                    <td>$11,373</td>
-                                    <td>($3,582)</td>
-                                    <td>($3,981)</td>
-                                    <td>($6,858)</td>
-                                    <td style="color: var(--sams-orange);">($3,050)</td>
-                                </tr>
-                                <tr>
-                                    <td>December</td>
-                                    <td>$11,373</td>
-                                    <td>($3,582)</td>
-                                    <td>($3,981)</td>
-                                    <td>($6,858)</td>
-                                    <td style="color: var(--sams-orange);">($3,050)</td>
-                                </tr>
-                            </tbody>
-                        </table>
-                    </div>
-                    <!-- Year 2 Revenue Mix -->
-                    <div class="view-pane revmix">
-                        <table class="data-table">
-                            <thead>
-                                <tr>
-                                    <th>Month</th>
-                                    <th>Core F&B</th>
-                                    <th>Rentals</th>
-                                    <th>Cafe/Retail</th>
-                                    <th>Studio</th>
-                                    <th>Total</th>
-                                </tr>
-                            </thead>
-                            <tbody>
-                                <tr>
-                                    <td>January</td>
-                                    <td>$13,000</td>
-                                    <td>$0</td>
-                                    <td>$1,500</td>
-                                    <td>$663</td>
-                                    <td>$15,163</td>
-                                </tr>
-                                <tr>
-                                    <td>February</td>
-                                    <td>$14,000</td>
-                                    <td>$0</td>
-                                    <td>$1,500</td>
-                                    <td>$927</td>
-                                    <td>$16,427</td>
-                                </tr>
-                                <tr>
-                                    <td>March</td>
-                                    <td>$16,000</td>
-                                    <td>$0</td>
-                                    <td>$2,000</td>
-                                    <td>$954</td>
-                                    <td>$18,954</td>
-                                </tr>
-                                <tr>
-                                    <td>April</td>
-                                    <td>$19,000</td>
-                                    <td>$0</td>
-                                    <td>$2,500</td>
-                                    <td>$1,245</td>
-                                    <td>$22,745</td>
-                                </tr>
-                                <tr>
-                                    <td>May</td>
-                                    <td>$34,000</td>
-                                    <td>$2,000</td>
-                                    <td>$3,500</td>
-                                    <td>$936</td>
-                                    <td>$40,436</td>
-                                </tr>
-                                <tr>
-                                    <td>June</td>
-                                    <td>$58,000</td>
-                                    <td>$5,000</td>
-                                    <td>$5,500</td>
-                                    <td>$1,000</td>
-                                    <td>$69,500</td>
-                                </tr>
-                                <tr>
-                                    <td>July</td>
-                                    <td>$68,000</td>
-                                    <td>$6,500</td>
-                                    <td>$6,500</td>
-                                    <td>$1,136</td>
-                                    <td>$82,136</td>
-                                </tr>
-                                <tr>
-                                    <td>August</td>
-                                    <td>$64,000</td>
-                                    <td>$5,500</td>
-                                    <td>$5,500</td>
-                                    <td>$818</td>
-                                    <td>$75,818</td>
-                                </tr>
-                                <tr>
-                                    <td>September</td>
-                                    <td>$30,000</td>
-                                    <td>$1,000</td>
-                                    <td>$3,500</td>
-                                    <td>$882</td>
-                                    <td>$35,382</td>
-                                </tr>
-                                <tr>
-                                    <td>October</td>
-                                    <td>$15,000</td>
-                                    <td>$0</td>
-                                    <td>$1,500</td>
-                                    <td>$1,191</td>
-                                    <td>$17,691</td>
-                                </tr>
-                                <tr>
-                                    <td>November</td>
-                                    <td>$10,000</td>
-                                    <td>$0</td>
-                                    <td>$1,000</td>
-                                    <td>$373</td>
-                                    <td>$11,373</td>
-                                </tr>
-                                <tr>
-                                    <td>December</td>
-                                    <td>$10,000</td>
-                                    <td>$0</td>
-                                    <td>$1,000</td>
-                                    <td>$873</td>
-                                    <td>$11,373</td>
-                                </tr>
-                                <tr style="background: rgba(64, 173, 72, 0.1); font-weight: 800;">
-                                    <td>TOTAL</td>
-                                    <td>$350,000</td>
-                                    <td>$20,000</td>
-                                    <td>$35,000</td>
-                                    <td>$12,000</td>
-                                    <td>$417,000</td>
-                                </tr>
-                            </tbody>
-                        </table>
-                    </div>
-                </div>
-            </div>
-
-            <div class="logic-box">
-                <strong>Seasonality Logic:</strong>
-                <p>Projections assume a 45% revenue concentration in Peak (Jun-Aug), 25% in Shoulder (May, Sep), and 30%
-                    in Off-Season (Oct-Apr). This highlights the importance of summer cash flow to sustain winter
-                    operations.</p>
-            </div>
-        </section>
-
-        <!-- Service Phasing Roadmap -->
-        <section>
-            <h2>Service Phasing Roadmap</h2>
-            <table class="data-table">
-                <thead>
-                    <tr>
-                        <th>Category</th>
-                        <th>Year 1 (Stabilize)</th>
-                        <th>Year 2 (Expand)</th>
-                        <th>Year 3 (Optimize)</th>
-                        <th>Year 4+ (Scale)</th>
-                    </tr>
-                </thead>
-                <tbody>
-                    <tr>
-                        <td><strong>Core F&B</strong></td>
-                        <td class="highlight">Launch (Optimized)</td>
-                        <td>Menu Refinement</td>
-                        <td>Volume Scaling</td>
-                        <td>Brand Licensing?</td>
-                    </tr>
-                    <tr>
-                        <td><strong>Rentals</strong></td>
-                        <td class="highlight">Launch (8 Units)</td>
-                        <td>Expand Fleet?</td>
-                        <td>Guided Tours</td>
-                        <td>Membership Model</td>
-                    </tr>
-                    <tr>
-                        <td><strong>Morning Cafe</strong></td>
-                        <td>Pilot (Weekends)</td>
-                        <td class="highlight">Full Launch</td>
-                        <td>Subscription Coffee</td>
-                        <td>Bakery Integration</td>
-                    </tr>
-                    <tr>
-                        <td><strong>Studio/Events</strong></td>
-                        <td>Setup & Beta</td>
-                        <td class="highlight">Full Program</td>
-                        <td>Corporate Retreats</td>
-                        <td>Regional Landmark</td>
-                    </tr>
-                    <tr>
-                        <td><strong>Evening Bistro</strong></td>
-                        <td>Concept Testing</td>
-                        <td>Pilot (Pop-ups)</td>
-                        <td class="highlight">Full Launch</td>
-                        <td>Signature Dinners</td>
-                    </tr>
-                </tbody>
-            </table>
-        </section>
-
-        <!-- Expense Structure -->
-        <section>
-            <h2>Expense Structure & Efficiency</h2>
-            <div class="logic-box">
-                <p style="margin-bottom: 20px;">Our goal is to maintain a **Lean Operational Model** where growth in
-                    revenue does not lead to a linear growth in labor or overhead.</p>
-                <div class="stat-grid">
-                    <div class="stat-card"><span class="label">Target COGS</span><span class="value">30-32%</span></div>
-                    <div class="stat-card"><span class="label">Target Labour</span><span class="value">32-36%</span>
-                    </div>
-                    <div class="stat-card"><span class="label">Fixed OpEx</span><span class="value">~$80k/yr</span>
-                    </div>
-                    <div class="stat-card"><span class="label">Debt Service</span><span class="value">$34,200/yr</span>
-                    </div>
                 </div>
             </div>
         </section>
@@ -1167,8 +782,8 @@
                 (2021-2025)</a>
             <a href="System-Tools/Lodge_Business_Plan.txt" class="source-link">📄 Lodge Business Plan (Minimum Detail
                 Baseline)</a>
-            <a href="Context-Exports/Lodge and Sam's - Sam's Snack Bar Services.txt" class="source-link">📄 Categorical
-                Service Logic & Phasing</a>
+            <a href="https://gamma.app/docs/Sams-Snack-Bar-Legacy-Business-Plan-0zhigtfdxvgy8e7" class="source-link">📄
+                Legacy Business Plan (Gamma)</a>
         </div>
     </div>
 
@@ -1180,44 +795,17 @@
                 <h2 id="modalTitle">Yearly Financial Detail</h2>
                 <p id="modalSubtitle">Full P&L Breakdown</p>
             </div>
-            <div id="modalBody">
-                <!-- Content populated by JS -->
-            </div>
+            <div id="modalBody"></div>
         </div>
     </div>
 
     <script>
         const financialData = {
-            '2021': {
-                revenue: { 'Sales Revenue': 96641.49, 'Other Revenue': 988.04, 'Total': 97629.53 },
-                cogs: { 'Inventory Costs': 38876.97, 'Freight': 366.44, 'Adjustment Write-off': 1665.20, 'Total': 40908.61 },
-                opex: { 'Accounting & Legal': 720.00, 'Amortization': 6368.03, 'Fees & Licenses': 289.00, 'Credit Card Charges': 370.88, 'Insurance': 1372.06, 'Property Taxes': 400.00, 'Vehicle': 2124.73, 'Utilities': 2896.35, 'Misc': 1198.96, 'R&M': 2159.80, 'Telephone': 1031.13, 'Travel': 1316.57, 'Total': 21930.18 },
-                net: 34790.74
-            },
-            '2022': {
-                revenue: { 'Sales Revenue': 84049.88, 'Other Revenue': 534.85, 'Total': 84584.73 },
-                cogs: { 'Inventory Costs': 36247.92, 'Freight': 669.04, 'Adjustment Write-off': 1689.56, 'Total': 38606.52 },
-                opex: { 'Accounting & Legal': 850.00, 'Amortization': 2268.04, 'Fees & Licenses': 349.00, 'Credit Card Charges': 366.47, 'Insurance': 1889.28, 'Property Taxes': 400.00, 'Vehicle': 3373.00, 'Utilities': 4930.83, 'Misc': 751.39, 'R&M': 385.04, 'Telephone': 950.18, 'Travel': 3084.60, 'Total': 20981.77 },
-                net: 24996.44
-            },
-            '2023': {
-                revenue: { 'Sales Revenue': 101038.93, 'Other Revenue': 0.00, 'Total': 101038.93 },
-                cogs: { 'Inventory Costs': 42083.48, 'Freight': 735.60, 'Adjustment Write-off': 1180.25, 'Total': 43999.33 },
-                opex: { 'Accounting & Legal': 850.00, 'Advertising': 611.95, 'Amortization': 3323.58, 'Fees & Licenses': 409.00, 'Credit Card Charges': 704.58, 'Insurance': 2153.83, 'Property Taxes': 400.00, 'Vehicle': 2337.77, 'Utilities': 4851.67, 'Misc': 611.51, 'R&M': 214.28, 'Telephone': 932.08, 'Travel': 1789.95, 'Total': 20592.60 },
-                net: 36447.00
-            },
-            '2024': {
-                revenue: { 'Sales Revenue': 113163.68, 'Other Revenue': 591.36, 'Total': 113755.04 },
-                cogs: { 'Inventory Costs': 47921.14, 'Freight': 698.99, 'Adjustment Write-off': 1061.33, 'Total': 49681.46 },
-                opex: { 'Accounting & Legal': 900.00, 'Amortization': 2917.35, 'Fees & Licenses': 289.00, 'Credit Card Charges': 1090.72, 'Insurance': 2250.05, 'Property Taxes': 400.00, 'Vehicle': 2227.92, 'Utilities': 4773.83, 'Misc': 638.81, 'R&M': 68.87, 'Telephone': 966.76, 'Travel': 4597.15, 'Total': 22425.17 },
-                net: 41648.41
-            },
-            '2025': {
-                revenue: { 'Sales Revenue (YTD)': 128793.41, 'Other Revenue': 0.00, 'Total': 128793.41 },
-                cogs: { 'Inventory Costs': 0.00, 'Freight': 599.05, 'Adjustment Write-off': 380.51, 'Total': 979.56 },
-                opex: { 'Accounting & Legal': 900.00, 'Fees & Licenses': 479.00, 'Credit Card Charges': 795.17, 'Insurance': 11.02, 'Interest': 1537.14, 'Property Taxes': 400.00, 'Vehicle': 970.04, 'Utilities': 1350.78, 'Misc': 1764.84, 'R&M': 321.00, 'Travel': 987.46, 'Total': 9945.90 },
-                net: 117867.95
-            }
+            '2021': { revenue: { 'Total': 97629.53 }, cogs: { 'Total': 40908.61 }, opex: { 'Total': 21930.18 }, net: 34790.74 },
+            '2022': { revenue: { 'Total': 84584.73 }, cogs: { 'Total': 38606.52 }, opex: { 'Total': 20981.77 }, net: 24996.44 },
+            '2023': { revenue: { 'Total': 101038.93 }, cogs: { 'Total': 43999.33 }, opex: { 'Total': 20592.60 }, net: 36447.00 },
+            '2024': { revenue: { 'Total': 113755.04 }, cogs: { 'Total': 49681.46 }, opex: { 'Total': 22425.17 }, net: 41648.41 },
+            '2025': { revenue: { 'Total': 128793.41 }, cogs: { 'Total': 979.56 }, opex: { 'Total': 9945.90 }, net: 117867.95 }
         };
 
         const themeToggle = document.getElementById('themeToggle');
@@ -1238,20 +826,15 @@
             localStorage.setItem('sams-theme', theme);
         }
 
-        // Load preference
         const savedTheme = localStorage.getItem('sams-theme');
         if (savedTheme) applyTheme(savedTheme);
 
         function switchTab(evt, tabName) {
             var i, tabcontent, tablinks;
             tabcontent = document.getElementsByClassName("tab-content");
-            for (i = 0; i < tabcontent.length; i++) {
-                tabcontent[i].style.display = "none";
-            }
+            for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
             tablinks = document.getElementsByClassName("tab-btn");
-            for (i = 0; i < tablinks.length; i++) {
-                tablinks[i].className = tablinks[i].className.replace(" active", "");
-            }
+            for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); }
             document.getElementById(tabName).style.display = "block";
             evt.currentTarget.className += " active";
         }
@@ -1259,18 +842,11 @@
         function switchView(evt, viewName) {
             var i, panes, buttons;
             panes = document.getElementsByClassName("view-pane");
-            for (i = 0; i < panes.length; i++) {
-                panes[i].classList.remove("active");
-            }
+            for (i = 0; i < panes.length; i++) { panes[i].classList.remove("active"); }
             buttons = document.getElementsByClassName("toggle-btn");
-            for (i = 0; i < buttons.length; i++) {
-                buttons[i].classList.remove("active");
-            }
-
+            for (i = 0; i < buttons.length; i++) { buttons[i].classList.remove("active"); }
             var activePanes = document.getElementsByClassName(viewName);
-            for (i = 0; i < activePanes.length; i++) {
-                activePanes[i].classList.add("active");
-            }
+            for (i = 0; i < activePanes.length; i++) { activePanes[i].classList.add("active"); }
             evt.currentTarget.classList.add("active");
         }
 
@@ -1278,45 +854,14 @@
             const data = financialData[year];
             const modal = document.getElementById('financialModal');
             const title = document.getElementById('modalTitle');
-            const subtitle = document.getElementById('modalSubtitle');
             const body = document.getElementById('modalBody');
-
             title.innerText = `${year} Financial Performance`;
-            subtitle.innerText = year === '2025' ? 'Year-to-Date (YTD) Snapshot' : 'Full Year P&L Breakdown';
-
-            let html = `<table class="pl-table">`;
-            html += `<tr class="category-row"><td colspan="2">Revenue</td></tr>`;
-            for (let [key, val] of Object.entries(data.revenue)) {
-                if (key === 'Total') continue;
-                html += `<tr><td class="indent">${key}</td><td class="value">$${val.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td></tr>`;
-            }
-            html += `<tr style="font-weight: 700;"><td>Total Revenue</td><td class="value">$${data.revenue.Total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td></tr>`;
-            html += `<tr class="category-row"><td colspan="2">Cost of Goods Sold</td></tr>`;
-            for (let [key, val] of Object.entries(data.cogs)) {
-                if (key === 'Total') continue;
-                html += `<tr><td class="indent">${key}</td><td class="value">($${val.toLocaleString(undefined, { minimumFractionDigits: 2 })})</td></tr>`;
-            }
-            html += `<tr style="font-weight: 700;"><td>Total COGS</td><td class="value">($${data.cogs.Total.toLocaleString(undefined, { minimumFractionDigits: 2 })})</td></tr>`;
-            html += `<tr class="category-row"><td colspan="2">Operating Expenses</td></tr>`;
-            for (let [key, val] of Object.entries(data.opex)) {
-                if (key === 'Total') continue;
-                html += `<tr><td class="indent">${key}</td><td class="value">($${val.toLocaleString(undefined, { minimumFractionDigits: 2 })})</td></tr>`;
-            }
-            html += `<tr style="font-weight: 700;"><td>Total Expenses</td><td class="value">($${data.opex.Total.toLocaleString(undefined, { minimumFractionDigits: 2 })})</td></tr>`;
-            html += `<tr class="total-row"><td>Net Income (Profit)</td><td class="value">$${data.net.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td></tr>`;
-            html += `</table>`;
-            body.innerHTML = html;
+            body.innerHTML = `<p>Total Revenue: $${data.revenue.Total.toLocaleString()}</p><p>Net Profit: $${data.net.toLocaleString()}</p>`;
             modal.style.display = 'flex';
         }
 
-        function closeModal() {
-            document.getElementById('financialModal').style.display = 'none';
-        }
-
-        window.onclick = function (event) {
-            const modal = document.getElementById('financialModal');
-            if (event.target == modal) closeModal();
-        }
+        function closeModal() { document.getElementById('financialModal').style.display = 'none'; }
+        window.onclick = function (event) { if (event.target == document.getElementById('financialModal')) closeModal(); }
     </script>
 </body>
 
